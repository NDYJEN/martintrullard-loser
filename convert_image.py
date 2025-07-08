#!/usr/bin/env python3
import base64
import sys
import os

def convert_image_to_base64(image_path):
    """Convertit une image en base64"""
    try:
        with open(image_path, 'rb') as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        return encoded_string
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier '{image_path}' n'existe pas.")
        return None
    except Exception as e:
        print(f"❌ Erreur lors de la conversion: {e}")
        return None

def update_html_with_image(base64_string):
    """Met à jour le fichier HTML avec la nouvelle image"""
    html_file = 'public/index.html'
    
    try:
        with open(html_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Chercher et remplacer l'ancienne image base64
        old_pattern = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD'
        if old_pattern in content:
            # Trouver le début et la fin de l'ancienne image
            start = content.find('data:image/jpeg;base64,')
            if start != -1:
                end = content.find('"', start)
                if end != -1:
                    old_base64 = content[start:end]
                    new_base64 = f'data:image/jpeg;base64,{base64_string}'
                    content = content.replace(old_base64, new_base64)
                    
                    with open(html_file, 'w', encoding='utf-8') as file:
                        file.write(content)
                    
                    print(f"✅ Image mise à jour dans {html_file}")
                    return True
        
        print("❌ Impossible de trouver l'emplacement de l'image dans le HTML")
        return False
        
    except Exception as e:
        print(f"❌ Erreur lors de la mise à jour du HTML: {e}")
        return False

def main():
    print("🖼️  CONVERTISSEUR D'IMAGE MARTIN -> BASE64")
    print("=" * 50)
    
    if len(sys.argv) != 2:
        print("Usage: python3 convert_image.py <chemin_vers_image>")
        print("Exemple: python3 convert_image.py martin.jpg")
        return
    
    image_path = sys.argv[1]
    
    if not os.path.exists(image_path):
        print(f"❌ Le fichier '{image_path}' n'existe pas.")
        return
    
    print(f"📸 Conversion de l'image: {image_path}")
    
    # Convertir l'image
    base64_string = convert_image_to_base64(image_path)
    
    if base64_string:
        print(f"✅ Conversion réussie! Taille: {len(base64_string)} caractères")
        
        # Mettre à jour le HTML automatiquement
        if update_html_with_image(base64_string):
            print("🎉 Votre photo de Laurie est maintenant dans le jeu!")
            print("🌐 Actualisez votre navigateur pour voir le résultat.")
        else:
            print("📋 Voici le code base64 à copier manuellement:")
            print(f"data:image/jpeg;base64,{base64_string}")
    
if __name__ == "__main__":
    main() 