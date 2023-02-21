# Modal Challenge - Tips to Find What You Are Looking For

- The modal-service in services dir contains the logic for attaching any component to the DOM in order to create the modal.
- The modal-service also allows you to close the modal via a closeModal function or simply pressing on the ESC key on the keyboard
- `modal-utils.ts` contains the createModal function which takes any component and the modal-service and returns the open and close functions that can be used to toggle the modal.
- NOTE: The modal-service has been created already so you don't need to create it yourself simply import it where you need it and pass it along with the component you want to render as a modal
