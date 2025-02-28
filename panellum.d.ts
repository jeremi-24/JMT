declare global {
    interface HotSpot {
      pitch: number;  // Position verticale
      yaw: number;    // Position horizontale
      type: string;   // Type du hotspot (par exemple, "scene")
      text: string;   // Texte du hotspot
      sceneId?: string;  // ID de la scène à afficher quand on clique sur le hotspot
    }
  
    interface Scene {
      type: string;  // Type de la scène (par exemple, "equirectangular")
      panorama: string;  // URL de l'image panoramique
      hotSpots?: HotSpot[];  // Liste des hotspots dans cette scène
    }
  
    interface ViewerOptions {
      type: string;  // Type de panorama (par exemple, "equirectangular")
      panorama: string;  // URL de l'image panoramique
      autoLoad: boolean;  // Chargement automatique
      hotSpots: HotSpot[];  // Liste des hotspots
      scenes: Record<string, Scene>;  // Dictionnaire des scènes
    }
  
    interface PannellumViewer {
      viewer(elementId: string, options: ViewerOptions): void;
    }
  
    interface Window {
      pannellum: PannellumViewer;
    }
  }
  
  export {};
  