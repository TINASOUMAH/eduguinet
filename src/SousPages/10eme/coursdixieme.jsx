import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
    
export default function Coursdixieme() {
      
      const [page,setPage]=useState(true)
       //je veux une fonction pour reinitialiser cette page
       const resetPage = () => {
         setPage(true);
       };
       const items=[ { slug: "maths", icon: "➕", label: "Mathématiques", description: "Science des nombres, des formes et des structures." },
      { slug: "physique", icon: "🧪", label: "Physique", description: "Forces, électricité, énergie et mécanique." },
      { slug: "chimie", icon: "🧬", label: "Chimie", description: "Composition, structure et propriétés de la matière." },
      { slug: "francais", icon: "FR", label: "Français", description: "Rédaction, littérature et grammaire approfondie." },
      { slug: "geographie", icon: "🌍", label: "Géographie", description: "Territoires, climat et ressources." },
      { slug: "histoire", icon: "📖", label: "Histoire", description: "Étude des événements passés et leur impact." },
      { slug: "biologie", icon: "🌿", label: "Biologie", description: "Science des êtres vivants et de leur environnement." },
      { slug: "ecm", icon: "🇬🇧", label: "ECM", description: "Valeurs civiques et éthiques." },
]
  return (
    <div>
        { page? <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"}}>
          {items.map((item) => (
           <button onClick={()=>setPage(false)} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "20px", marginBottom: "15px" ,marginRight:"10px"}}>
              <Link to={item.slug}>
                 {item.icon} {item.label}
              </Link>
         </button>
       ))}
        </div>: <main>
           <Outlet />
         </main>
         }
       </div>
     )
   }
   
  

