export const validate = ({search}) => {
  const errors = {}
  if (!search) {
    errors.search = "Required";
  } else if (search.length < 3) {
    errors.search = "Search keyword should be at least 3 characters";
  }
  return errors
}
