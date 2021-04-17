export class Form {
  static parseElements(
    elems: any,
    data: { [index: string]: any } = {},
    validations: any = undefined,
    errors: { [index: string]: any } = {}
  ) {
    for (const elem of elems) {
      if (elem.name) {
        // eslint-disable-next-line no-param-reassign
        data[elem.name] = elem.value
      }
    }
    let valid = true
    if (validations) {
      for (const [key, validation] of Object.entries<any>(validations)) {
        const elem = elems[key]
        if (elem) {
          const errMsg = validation(elem, data)
          // eslint-disable-next-line no-param-reassign
          errors[elem.name] = errMsg
          if (errMsg) {
            elem.classList.add('invalid')
            valid = false
          } else {
            elem.classList.remove('invalid')
          }
        }
      }
    }

    return {
      data: { ...data },
      validity: {
        valid,
        errors: { ...errors },
      },
    }
  }

  static parseElement(
    elem: any,
    data: { [index: string]: any } = {},
    validation: any = undefined,
    errors: { [index: string]: any } = {}
  ) {
    if (elem.name === undefined) {
      throw new Error('Element needs a name!')
    }
    // eslint-disable-next-line no-param-reassign
    data[elem.name] = elem.value

    if (validation) {
      // eslint-disable-next-line no-param-reassign
      errors[elem.name] = validation(elem, data)
    }

    return {
      data,
      errors: { ...errors },
    }
  }
}
