const util = (() => ({
  getBase64: value => (
    new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      }
      reader.readAsDataURL(value);
    })
  )
}))();