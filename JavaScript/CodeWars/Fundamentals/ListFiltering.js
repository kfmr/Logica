function filter_list(l) {
  return l.filter(el => Number.isFinite(el))
}