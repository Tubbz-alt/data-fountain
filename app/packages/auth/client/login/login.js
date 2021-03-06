import swal from 'sweetalert';
/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'submit form'(e, template) {
        e.preventDefault();
        let data = {
            email: $('input[type="email"]').val(),
            password: $('input[type="password"]').val()
        };

        Meteor.loginWithPassword(data.email.toLowerCase(), data.password, (err) => {
            if (err) {
                swal('Sorry!', 'That was not the right login', 'warning');
                return;
            } else {
                if (Router.current().route.name === 'login') {
                    $('.spinner').css('opacity', 1);
                    $('.panel').css('opacity', 0);
                    Router.go('admin');
                }
            }
            // setTimeout(function() {
            //     Router.go('/admin');
            // }, 500);
        });
    }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
    $('.spinner').css('opacity', 0);
});

Template.Login.onDestroyed(function () {
});
