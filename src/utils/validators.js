import { helpers, email, minLength, required, sameAs } from '@vuelidate/validators'

const i18n = {
  password: 'Пароль'
}

export const required$ = helpers.withMessage('Это поле должно быть обязательно заполнено', required)
export const email$ = helpers.withMessage('Неправильный формат почты', email)
export const minLength$ = (number) => helpers.withMessage(`Длина символов должна быть больше ${number}`, minLength(number))
export const sameAs$ = (field, fieldName) => helpers.withMessage(`Это поле должно равняться полю "${i18n[fieldName]}"`, sameAs(field))
