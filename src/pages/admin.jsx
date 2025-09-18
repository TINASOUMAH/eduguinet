import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  HelpCircle,
  BarChart3,
  LogOut,
} from "lucide-react";

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("stats");

  // États pour stocker les éléments
  const [courses, setCourses] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  // États pour les formulaires
  const [courseForm, setCourseForm] = useState({ title: "", level: "", subject: "" });
  const [pdfForm, setPdfForm] = useState({ title: "", level: "", subject: "" });
  const [quizForm, setQuizForm] = useState({ title: "", level: "", subject: "" });

  const handleAddCourse = () => {
    if (!courseForm.title) return alert("Titre requis");
    setCourses([...courses, { ...courseForm, id: Date.now() }]);
    setCourseForm({ title: "", level: "", subject: "" });
  };

  const handleAddPdf = () => {
    if (!pdfForm.title) return alert("Titre requis");
    setPdfs([...pdfs, { ...pdfForm, id: Date.now() }]);
    setPdfForm({ title: "", level: "", subject: "" });
  };

  const handleAddQuiz = () => {
    if (!quizForm.title) return alert("Titre requis");
    setQuizzes([...quizzes, { ...quizForm, id: Date.now() }]);
    setQuizForm({ title: "", level: "", subject: "" });
  };

  const menuItems = [
    { id: "stats", label: "Statistiques", icon: <BarChart3 size={18} /> },
    { id: "users", label: "Utilisateurs", icon: <Users size={18} /> },
    { id: "courses", label: "Cours", icon: <BookOpen size={18} /> },
    { id: "pdfs", label: "PDF & Exercices", icon: <FileText size={18} /> },
    { id: "quiz", label: "Quiz", icon: <HelpCircle size={18} /> },
  ];

  const styles = {
    container: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", background: "#f4f6f9" },
    sidebar: { width: 250, background: "#fff", boxShadow: "2px 0 8px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" },
    sidebarHeader: { padding: 20, borderBottom: "1px solid #eee" },
    title: { fontSize: 20, fontWeight: "bold", color: "#2563eb", display: "flex", alignItems: "center", gap: 8 },
    subtitle: { fontSize: 12, color: "#777", marginTop: 4 },
    nav: { display: "flex", flexDirection: "column", padding: 16, gap: 10, flex: 1 },
    navBtn: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      fontSize: 14,
      background: active ? "#2563eb" : "transparent",
      color: active ? "#fff" : "#444",
      fontWeight: active ? "bold" : "normal",
      boxShadow: active ? "0 4px 10px rgba(37,99,235,0.3)" : "none",
      transition: "0.3s",
    }),
    logout: { margin: 16, padding: "10px 14px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, color: "#e11d48", background: "transparent", display: "flex", alignItems: "center", gap: 8, transition: "0.3s" },
    main: { flex: 1, padding: 30, overflowY: "auto" },
    sectionTitle: { fontSize: 22, fontWeight: 600, marginBottom: 20, color: "#333" },
    formGroup: { display: "flex", gap: 10, marginBottom: 10 },
    input: { flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" },
    addBtn: { padding: "8px 12px", borderRadius: 6, border: "none", cursor: "pointer", background: "#2563eb", color: "#fff" },
    listItem: { padding: 12, background: "#fff", borderRadius: 10, marginBottom: 10, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  };

  // Composants des tabs
  const tabComponents = {
    stats: (
      <div>
        <h3 style={styles.sectionTitle}>📊 Statistiques</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          <div style={{ background: "#fff", padding: 20, borderRadius: 16, borderLeft: "5px solid #2563eb" }}>
            <h4>Courses</h4>
            <p style={{ fontSize: 28, fontWeight: "bold", color: "#2563eb" }}>{courses.length}</p>
          </div>
          <div style={{ background: "#fff", padding: 20, borderRadius: 16, borderLeft: "5px solid #16a34a" }}>
            <h4>PDFs</h4>
            <p style={{ fontSize: 28, fontWeight: "bold", color: "#16a34a" }}>{pdfs.length}</p>
          </div>
          <div style={{ background: "#fff", padding: 20, borderRadius: 16, borderLeft: "5px solid #9333ea" }}>
            <h4>Quizzes</h4>
            <p style={{ fontSize: 28, fontWeight: "bold", color: "#9333ea" }}>{quizzes.length}</p>
          </div>
        </div>
      </div>
    ),
    courses: (
      <div>
        <h3 style={styles.sectionTitle}>📚 Ajouter un Cours</h3>
        <div style={styles.formGroup}>
          <input
            placeholder="Titre du cours"
            value={courseForm.title}
            onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Niveau"
            value={courseForm.level}
            onChange={(e) => setCourseForm({ ...courseForm, level: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Matière"
            value={courseForm.subject}
            onChange={(e) => setCourseForm({ ...courseForm, subject: e.target.value })}
            style={styles.input}
          />
          <button style={styles.addBtn} onClick={handleAddCourse}>Ajouter</button>
        </div>
        <ul>
          {courses.map(c => (
            <li key={c.id} style={styles.listItem}>
              {c.title} - {c.level} - {c.subject}
            </li>
          ))}
        </ul>
      </div>
    ),
    pdfs: (
      <div>
        <h3 style={styles.sectionTitle}>📂 Ajouter un PDF / Exercice</h3>
        <div style={styles.formGroup}>
          <input
            placeholder="Titre"
            value={pdfForm.title}
            onChange={(e) => setPdfForm({ ...pdfForm, title: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Niveau"
            value={pdfForm.level}
            onChange={(e) => setPdfForm({ ...pdfForm, level: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Matière"
            value={pdfForm.subject}
            onChange={(e) => setPdfForm({ ...pdfForm, subject: e.target.value })}
            style={styles.input}
          />
          <button style={styles.addBtn} onClick={handleAddPdf}>Ajouter</button>
        </div>
        <ul>
          {pdfs.map(p => (
            <li key={p.id} style={styles.listItem}>
              {p.title} - {p.level} - {p.subject}
            </li>
          ))}
        </ul>
      </div>
    ),
    quiz: (
      <div>
        <h3 style={styles.sectionTitle}>❓ Ajouter un Quiz</h3>
        <div style={styles.formGroup}>
          <input
            placeholder="Titre"
            value={quizForm.title}
            onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Niveau"
            value={quizForm.level}
            onChange={(e) => setQuizForm({ ...quizForm, level: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Matière"
            value={quizForm.subject}
            onChange={(e) => setQuizForm({ ...quizForm, subject: e.target.value })}
            style={styles.input}
          />
          <button style={styles.addBtn} onClick={handleAddQuiz}>Ajouter</button>
        </div>
        <ul>
          {quizzes.map(q => (
            <li key={q.id} style={styles.listItem}>
              {q.title} - {q.level} - {q.subject}
            </li>
          ))}
        </ul>
      </div>
    ),
    users: (
      <div>
        <h3 style={styles.sectionTitle}>👥 Gestion des Utilisateurs</h3>
        <p>Ajouter / Supprimer / Modifier les utilisateurs.</p>
      </div>
    ),
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.title}>
            <LayoutDashboard size={20} /> EduGuinée
          </h2>
          <p style={styles.subtitle}>Tableau de bord admin</p>
        </div>
        <nav style={styles.nav}>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={styles.navBtn(activeTab === item.id)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
        <button style={styles.logout} onClick={onLogout}>
          <LogOut size={18} /> Déconnexion
        </button>
      </aside>

      {/* Contenu principal */}
      <main style={styles.main}>{tabComponents[activeTab]}</main>
    </div>
  );
};

export default AdminDashboard;
