'use server'

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const errors: Record<string, string> = {}

  if (!name || name.trim().length < 2) {
    errors.name = 'El nombre es obligatorio.'
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Introduce un email válido.'
  }
  if (!message || message.trim().length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres.'
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  console.log('Nuevo contacto:', { name, email, message })
  return { success: true, errors: {} }
}