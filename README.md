# Insurerity Modal Challenge

// Remove the modal component from the DOM when closed
componentRef.onDestroy(() => {
this.appRef.detachView(componentRef.hostView);
componentRef.destroy();
});
