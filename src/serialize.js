export default serializeForm;
const serializeForm = function (form) {
   let obj = {};
   let formData = new FormData(form);
   for (let key of formData.keys()) {
      obj[key] = formData.get(key);
   }
   return obj;
}