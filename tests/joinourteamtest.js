module.exports = {

    "Envio de formulario" : function(browser) {
        browser
        .url("https://decemberlabs.com/")
        .click('a[class=btn_mobile]')
        .pause(1000)
        .click("xpath","//span[contains(text(),'Careers')]")
        .pause(2000)
        .assert.title("Careers - Be a Game Changer, Join Our Team | December Labs")
        .click("xpath","//a[contains(text(),'Apply now!')]")
        .setValue('input[type=name]', 'TEST')
        .setValue('input[type=email]', 'test@decemberlabs.com')
        .setValue('input[type=tel]', '123456789')
        .setValue('input[type=link]', 'https://linkedin.com/in/nombredeusuario')
        .setValue('textarea[name=comments]', 'Prueba de join out team')
        .pause(1000).click("input[type=submit]")
        .pause(2000).assert.visible('body.careers.modal_is_open:nth-child(2) section.modal.msg_join_us.show:nth-child(1) article.box.success div.content_form div.row.content_success.join-us-success:nth-child(2) > a.button.close_modal.close-modal-success:nth-child(4)')
        .pause(3000)
        .end();
}}