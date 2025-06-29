function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection)
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection)
      }
    }
  }
  return collection
}

function myMap(collection, callback) {
  const result = []
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection))
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection))
      }
    }
  }
  return result
}

function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue
  let startIndex = 0
  let values

  if (Array.isArray(collection)) {
    values = collection
  } else {
    values = []
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        values.push(collection[key])
      }
    }
  }

  if (accumulator === undefined) {
    accumulator = values[0]
    startIndex = 1
  }

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i], i, collection)
  }

  return accumulator
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) return collection[i]
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        return collection[key]
      }
    }
  }
  return undefined
}

function myFilter(collection, predicate) {
  const result = []
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) result.push(collection[i])
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        result.push(collection[key])
      }
    }
  }
  return result
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else {
    let count = 0
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) count++
    }
    return count
  }
}

function myFirst(collection, n) {
  if (n === undefined) {
    return collection[0]
  } else {
    return collection.slice(0, n)
  }
}

function myLast(collection, n) {
  if (n === undefined) {
    return collection[collection.length - 1]
  } else {
    return collection.slice(collection.length - n)
  }
}

function myKeys(object) {
  const keys = []
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key)
    }
  }
  return keys
}

function myValues(object) {
  const values = []
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      values.push(object[key])
    }
  }
  return values
}
