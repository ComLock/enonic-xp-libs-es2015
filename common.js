const NamePrettyfier = Java.type('com.enonic.xp.name.NamePrettyfier');

export function sanitize(text = null) {
  return (text == null || text === '') ? '' : NamePrettyfier.create(text);
}


export const Common = {
  sanitize
};


export default Common;
