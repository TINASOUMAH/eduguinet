import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, FileText, PenTool, ListChecks, Calculator } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">EduGuinée</h1>
          <nav className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Connexion</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">À propos</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/eleves.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue sur <span className="text-yellow-400">EduGuinée</span>
          </h2>
          <p className="text-xl md:text-2xl">Apprendre, Progresser, Réussir</p>
        </div>
      </section>

      {/* NIVEAUX */}
      <section className="py-12 container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Choisissez votre niveau</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/level/6eme" className="p-8 bg-white rounded-2xl shadow hover:shadow-lg text-center">
            <h4 className="text-xl font-semibold">6ème</h4>
          </Link>
          <Link to="/level/10eme" className="p-8 bg-white rounded-2xl shadow hover:shadow-lg text-center">
            <h4 className="text-xl font-semibold">10ème</h4>
          </Link>
          <Link to="/level/terminale" className="p-8 bg-white rounded-2xl shadow hover:shadow-lg text-center">
            <h4 className="text-xl font-semibold">Terminale</h4>
          </Link>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Ce que nous offrons</h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <BookOpen className="mx-auto text-blue-600" size={40} />
              <h4 className="mt-4 font-semibold">Cours</h4>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <FileText className="mx-auto text-green-600" size={40} />
              <h4 className="mt-4 font-semibold">PDF</h4>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <PenTool className="mx-auto text-yellow-600" size={40} />
              <h4 className="mt-4 font-semibold">Exercices</h4>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <ListChecks className="mx-auto text-purple-600" size={40} />
              <h4 className="mt-4 font-semibold">Quiz</h4>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <Calculator className="mx-auto text-red-600" size={40} />
              <h4 className="mt-4 font-semibold">Formules & Méthodes</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} EduGuinée - Tous droits réservés.</p>
          <p className="text-sm mt-2">Développé avec ❤️ pour les élèves de Guinée</p>
        </div>
      </footer>
    </div>
  );
}
