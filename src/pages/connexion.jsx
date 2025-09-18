import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Connexion({ onClose }) {
  const { login, register, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let user;
      if (isLogin) {
        user = await login(email, password);
      } else {
        user = await register({ name: username, email, password, role: "eleve" });
      }

      // Redirection automatique selon le rôle
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      onClose();
    } catch (err) {
      setError(err?.response?.data?.message || "Erreur inconnue");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '40px',
        width: '100%',
        maxWidth: '420px',
        margin: '20px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        position: 'relative',
        animation: 'slideUp 0.4s ease-out',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#f1f5f9',
            color: '#64748b',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >×</button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{
            width: '80px', height: '80px',
            backgroundColor: isLogin ? '#3b82f6' : '#10b981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '35px',
            transition: 'all 0.3s ease'
          }}>
            {isLogin ? '👋' : '🚀'}
          </div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 10px 0',
            fontFamily: "'Inter', sans-serif"
          }}>
            {isLogin ? "Bon retour !" : "Rejoignez-nous"}
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
            {isLogin ? "Connectez-vous à votre compte" : "Créez votre compte en quelques secondes"}
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {!isLogin && (
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '16px 20px 16px 50px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: '#f8fafc'
                }}
              />
              <span style={{
                position: 'absolute',
                left: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '18px'
              }}>👤</span>
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px 20px 16px 50px',
                border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
                borderRadius: '12px',
                fontSize: '16px',
                backgroundColor: '#f8fafc'
              }}
            />
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '18px'
            }}>📧</span>
          </div>

          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px 50px 16px 50px',
                border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
                borderRadius: '12px',
                fontSize: '16px',
                backgroundColor: '#f8fafc'
              }}
            />
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '18px'
            }}>🔒</span>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#64748b',
                padding: '5px'
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {error && (
            <div style={{
              padding: '12px 16px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              color: '#dc2626',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              animation: 'shake 0.5s ease-in-out'
            }}>
              <span>⚠️</span>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: isLogin ? '#3b82f6' : '#10b981',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {loading ? "Chargement..." : isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        {/* Toggle Form */}
        <div style={{ textAlign: 'center', marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
            {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
          </p>
          <button
            onClick={toggleForm}
            style={{
              background: 'none',
              border: 'none',
              color: isLogin ? '#3b82f6' : '#10b981',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isLogin ? "Créer un compte" : "Se connecter"}
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes shake { 0%,100%{transform:translateX(0);} 25%{transform:translateX(-5px);} 75%{transform:translateX(5px);} }
      `}</style>
    </div>
  );
}
