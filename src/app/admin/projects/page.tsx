"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Loader2, Upload } from "lucide-react";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    description: "",
    previewLink: "",
    previewImg: "",
    category: ""
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("folder", "cleanweb-studio/projects"); // Hardcoded folder as requested

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (res.ok) {
        setFormData(prev => ({ ...prev, previewImg: result.url }));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    const isEdit = !!formData._id;
    const url = isEdit ? `/api/projects/${formData._id}` : "/api/projects";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await fetchProjects();
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
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter((p: any) => p._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({ _id: "", title: "", description: "", previewLink: "", previewImg: "", category: "" });
  };

  const openEdit = (project: any) => {
    setFormData(project);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Projects</h1>
          <p style={{ color: "var(--slate)" }}>Manage your portfolio projects.</p>
        </div>
        <button 
          className="btn btn--primary" 
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "3rem", color: "var(--mint)" }}>
          <Loader2 size={32} className="animate-spin" />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project: any) => (
            <div key={project._id} className="bento__card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ height: "180px", background: "#0a1120", position: "relative" }}>
                {project.previewImg ? (
                  <img src={project.previewImg} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ display: "grid", placeItems: "center", height: "100%", color: "var(--slate)" }}>No Image</div>
                )}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--mint)", background: "rgba(0,230,118,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: "1.2rem", marginTop: "1rem", marginBottom: "0.5rem" }}>{project.title}</h3>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", marginBottom: "1.5rem" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--stroke)", paddingTop: "1rem" }}>
                  <a href={project.previewLink} target="_blank" rel="noreferrer" style={{ fontSize: "0.9rem", color: "white" }}>View Link</a>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button onClick={() => openEdit(project)} style={{ background: "transparent", border: "none", color: "var(--slate)", cursor: "pointer" }}><Edit2 size={16}/></button>
                    <button onClick={() => handleDelete(project._id)} style={{ background: "transparent", border: "none", color: "#ff4d4d", cursor: "pointer" }}><Trash2 size={16}/></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "grid", placeItems: "center", zIndex: 50 }}>
          <div className="bento__card" style={{ width: "90%", maxWidth: "600px", maxHeight: "90vh", overflowY: "auto", padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>{formData._id ? "Edit Project" : "Add Project"}</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Title</label>
                  <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Category</label>
                  <input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Description</label>
                <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)", resize: "vertical" }} />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Preview Link</label>
                <input required value={formData.previewLink} onChange={e => setFormData({...formData, previewLink: e.target.value})} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Preview Image</label>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }}>
                  <input required={!formData.previewImg} value={formData.previewImg} onChange={e => setFormData({...formData, previewImg: e.target.value})} style={{ flex: 1, padding: "0.8rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--stroke)", color: "var(--text)" }} placeholder="Image URL" />
                  <label style={{ padding: "0.8rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {uploading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
                    {uploading ? "Uploading..." : "Upload"}
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} disabled={uploading} />
                  </label>
                </div>
                {formData.previewImg && (
                  <div style={{ marginTop: "1rem", width: "150px", height: "100px", borderRadius: "8px", overflow: "hidden" }}>
                    <img src={formData.previewImg} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--stroke)" }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: "0.8rem 1.5rem", background: "transparent", border: "1px solid var(--stroke)", color: "white", borderRadius: "8px", cursor: "pointer" }}>Cancel</button>
                <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? "Saving..." : "Save Project"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
