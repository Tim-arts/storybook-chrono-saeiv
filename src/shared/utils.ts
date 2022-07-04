/**
 * Converts object to text
 *
 * @param {Any} obj - Object to convert
 * @return {String}
 */
export function convertToText(obj: any): string {
  if (obj === null) return 'null';

  // create an array that will later be joined into a string.
  const string = [];

  // is object
  //    Both arrays and objects seem to return "object"
  //    when typeof(obj) is applied to them. So instead
  //    I am checking to see if they have the property
  //    join, which normal objects don't have but
  //    arrays do.
  if (typeof obj === 'object' && obj.join === undefined) {
    string.push('{');

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        string.push(
            prop, ': ', convertToText(obj[prop]), ',',
        );
      }
    }
    string.push('}');

    // is arrayed
  } else if (typeof obj === 'object' && !(obj.join === undefined)) {
    string.push('[');
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        string.push(convertToText(obj[prop]), ',');
      }
    }
    string.push(']');

    // is function
  } else if (typeof obj === 'function') {
    string.push(obj.toString());

    // all other values can be done with JSON.stringify
  } else {
    string.push(JSON.stringify(obj));
  }

  return string.join('');
}
