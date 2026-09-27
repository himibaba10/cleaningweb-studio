"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Loader2, Check } from "lucide-react";

export default function AdminPricing() {
  const [pricings, setPricings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    _id: "",
    planName: "",
    price: 0,
    currency: "$",
    description: "",
    features: [""],
    isPopular: false
  });

  const fetchPricings = async () => {
    try {
      const res = await fetch("/api/pricing");
      const data = await res.json();
      setPricings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricings();
  }, []);

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => setFormData({ ...formData, features: [...formData.features, ""] });
  
  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    // Clean empty features
    const cleanedFeatures = formData.features.filter(f => f.trim() !== "");
    if (cleanedFeatures.length === 0) {
      alert("Please add at least one feature");
      setSaving(false);
      return;
    }

    const payload = { ...formData, features: cleanedFeatures, price: Number(formData.price) };
    const isEdit = !!formData._id;
    const url = isEdit ? `/api/pricing/${formData._id}` : "/api/pricing";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        await fetchPricings();
        setIsModalOpen(false);
        resetForm();
      } else {
        const data = await res.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this pricing plan?")) return;
    try {
      const res = await fetch(`/api/pricing/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPricings(pricings.filter((p: any) => p._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({ _id: "", planName: "", price: 0, currency: "$", description: "", features: [""], isPopular: false });
  };

  const openEdit = (pricing: any) => {
    setFormData(pricing);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Pricing Plans</h1>
          <p style={{ color: "var(--slate)" }}>Manage your service pricing packages.</p>
        </div>
        <button 
          className="btn btn--primary" 
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Plus size={18} /> Add Plan
        </button>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "3rem", color: "var(--mint)" }}>
          <Loader2 size={32} className="animate-spin" />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
          {pricings.map((plan: any) => (
            <div key={plan._id} className="plan" style={{ position: "relative" }}>
              {plan.isPopular && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--mint)", color: "black", padding: "0.3rem 1rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" }}>
                  Most Popular
                </div>
              )}
              <h3 className="plan__name">{plan.planName}</h3>
              <p style={{ color: "var(--slate)", fontSize: "0.9rem", minHeight: "40px", marginBottom: "1rem" }}>{plan.description}</p>
              
              <div className="plan__price">
                <span>{plan.currency}</span>{plan.price}
              </div>
              
              <ul className="ticks" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx}><Check size={16} /> {feature}</li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "1rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--stroke)" }}>
                <button onClick={() => openEdit(plan)} className="btn" style={{ flex: 1, padding: "0.6rem" }}>Edit</button>
                <button onClick={() => handleDelete(plan._id)} className="btn" style={{ background: "rgba(255,50,50,0.1)", color: "#ff4d4d", padding: "0.6rem", border: "1px solid rgba(255,50,50,0.2)" }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "grid", placeItems: "center", zIndex: 50 }}>
          <div className="bento__card" style={{ width: "90%", maxWidth: "500px", maxHeight: "90vh", overflowY: "auto", padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>{formData._id ? "Edit Plan" : "Add Plan"}</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Plan Name</label>
                <input required value={formData.planName} onChange={e => setFormData({...formData, planName: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Currency</label>
                  <input required value={formData.currency} onChange={e => setFormData({...formData, currency: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Price</label>
                  <input required type="number" min="0" step="any" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Description</label>
                <input required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
              </div>

              <div>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", marginTop: "0.5rem" }}>
                  <input type="checkbox" checked={formData.isPopular} onChange={e => setFormData({...formData, isPopular: e.target.checked})} />
                  Most Popular Plan?
                </label>
              </div>

              <div style={{ marginTop: "0.5rem" }}>
                <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  Features
                  <button type="button" onClick={addFeature} style={{ background: "none", border: "none", color: "var(--mint)", cursor: "pointer", fontSize: "0.8rem" }}>+ Add Feature</button>
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {formData.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "0.5rem" }}>
                      <input 
                        value={feature} 
                        onChange={e => handleFeatureChange(idx, e.target.value)} 
                        style={{ flex: 1, padding: "0.6rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)", fontSize: "0.9rem" }} 
                        placeholder={`Feature ${idx + 1}`}
                      />
                      {formData.features.length > 1 && (
                        <button type="button" onClick={() => removeFeature(idx)} style={{ background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.2)", color: "#ff4d4d", borderRadius: "8px", padding: "0 0.8rem", cursor: "pointer" }}>
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--stroke)" }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: "0.8rem 1.5rem", background: "transparent", border: "1px solid var(--stroke)", color: "white", borderRadius: "8px", cursor: "pointer" }}>Cancel</button>
                <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? "Saving..." : "Save Plan"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
