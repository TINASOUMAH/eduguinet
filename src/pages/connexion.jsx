import React, { useState } from "react";
import "../style/styleconnexion.css";

export default function AuthForm({ onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true); // Connexion ou inscription
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // 🔹 Ici tu peux ajouter ta logique réelle de connexion
      console.log("Connexion avec :", email, password);
    } else {
      // 🔹 Ici tu peux ajouter ta logique réelle d'inscription
      console.log("Inscription avec :", username, email, password);
    }

    // 🔹 Signale que l'utilisateur est connecté et ferme le modal
    if (onLoginSuccess) onLoginSuccess();
    onClose();
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-form-container">
        {/* Bouton fermer */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2 className="text-center mb-4">
          {isLogin ? "Connexion" : "Inscription"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn-login"
          >
            {isLogin ? "Se connecter" : "S'inscrire"}
          </button>
        </form>

        <p
          className="toggle-form mt-2 text-center text-sm text-blue-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Pas de compte ? S'inscrire"
            : "Déjà un compte ? Se connecter"}
        </p>
      </div>
    </div>
  );
}
