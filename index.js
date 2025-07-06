function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('response').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('response').classList.add('hidden');
  }, 3000);
  event.target.reset();
  return false;
}
