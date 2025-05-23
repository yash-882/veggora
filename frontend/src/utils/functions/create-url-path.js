import modifyStr from '../../../../backend/utils/functions/string-operations'

function createUrlPath(url) {
  // to lowercase and remove & symbol
  let cleaned = url.toLowerCase()
    .toLowerCase()
    .replaceAll('&', '')

    // remove extra spaces between words(hey    buddy ->  hey buddy)
    let spaced = modifyStr.removeWhiteSpace(cleaned);
  
    // replace whitespaces with '-'
   return spaced.replaceAll(' ', '-')
}

export default createUrlPath;