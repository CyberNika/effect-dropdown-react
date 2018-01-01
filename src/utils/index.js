export const classnames = (cls) => {
  let classList = []

  if (Array.isArray(cls)) {
    classList = cls.map(item => item)
  }

  if (Object.prototype.toString.call(cls) === '[object Object]') {
    Object.keys(cls).forEach((item) => {
      if (cls[item]) {
        classList.push(item)
      }
    })
  }

  return classList.join(' ')
}

const getTransformValue = (key, value) => `${key}(${value})`

export const transform = (values = {}) => {
  const result = []

  Object.keys(values).forEach((key) => {
    const value = Array.isArray(values[key]) ? values[key].join(', ') : values[key]

    result.push(getTransformValue(key, value))
  })

  return result.join(' ')
}
