/**
 * Prototype Decorator
 * ===
 *
 * @public
 * @function prototypeDecorator
 * @flow
 */

const NODE_ENV = typeof process !== "undefined" ?
  process.env.NODE_ENV :
  "production";


export default function prototypeDecorator(defaults/*: Object */ = {})/*: (target: Object) => void */ {
  return (target) => {
    // Instace prototype properties / methods assigin
    Object.keys(defaults)
      .forEach(key => {
        if (!(key in target.prototype)) {
          target.prototype[key] = defaults[key];
        } else {
          if (NODE_ENV !== "production") {
            throw new Error (`You should not override exising property \`${key}\` of Class \`${target.name}\``);
          }
        }
      });
  };
}
