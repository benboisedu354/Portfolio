import emailjs from 'emailjs-com'

// Initialiser EmailJS (à faire une seule fois)
const initEmailJS = () => {
  if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
    console.warn('EmailJS service ID non configuré')
    return false
  }
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  return true
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    if (!initEmailJS()) {
      throw new Error('EmailJS non configuré')
    }

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: import.meta.env.VITE_CONTACT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      }
    )

    return {
      success: true,
      message: 'Message envoyé avec succès !',
      data: response,
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message',
    }
  }
}
