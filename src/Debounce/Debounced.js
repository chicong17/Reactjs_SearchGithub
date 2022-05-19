import debounce from 'lodash/debounce'

const debounced = (func, delay) => {
  return debounce(func, delay)
}
export default debounced
