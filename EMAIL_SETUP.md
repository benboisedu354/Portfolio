# Configuration EmailJS

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=benjaminboisedu354@gmail.com
```

## Guide de configuration EmailJS

### 1. Créer un compte EmailJS
- Allez sur [emailjs.com](https://www.emailjs.com)
- Inscrivez-vous gratuitement

### 2. Configurer le Service
- Dans le dashboard, allez dans **Email Services**
- Cliquez sur **Add New Service**
- Choisissez un provider (Gmail, Outlook, etc.) ou utilisez **Gmail**
- Suivez les instructions pour connecter votre email

### 3. Créer un Template
- Allez dans **Email Templates**
- Cliquez sur **Create New Template**
- Nommez-le "contact_form"
- Utilisez ce template :

```
Subject: Nouveau message de {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

### 4. Obtenir les IDs
1. **Service ID** : Dans **Email Services**, copiez le Service ID
2. **Template ID** : Dans **Email Templates**, copiez le Template ID
3. **Public Key** : Allez dans **Account**, section **API Keys**

### 5. Installation du package
```bash
npm install emailjs-com
```

## Fonctionnalités implémentées

✅ Validation du formulaire (nom, email, message)
✅ Envoi d'emails via EmailJS
✅ Messages de feedback (succès/erreur)
✅ Prevention de la soumission multiple
✅ Gestion des erreurs
✅ Auto-vidage du formulaire après succès
