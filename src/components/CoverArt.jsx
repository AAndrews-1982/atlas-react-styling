// src/components/CoverArt.jsx

import coverArt from '../assets/placeholder.svg';
import "../index.css";

export default function CoverArt() {
    return (
	<div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-secondary">
            <img 
                src={coverArt} 
                alt="Cover Art" 
                className="rounded-lg w-full h-auto" 
            />
        </div>
    );
}
