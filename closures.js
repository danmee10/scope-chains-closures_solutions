function foo() {
  var bar = '';
  quux = 'some global value';
  function zip() {
    var quux = '';
    bar = true;
  }

  return zip;
};