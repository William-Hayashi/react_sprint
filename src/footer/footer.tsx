import './footer.css'

function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className="copyright-text">
                    <img src="../src/logos/logoSalesforce.png" alt="Logo" className="logo-salesforce" />
                    <span>&copy; Copyright 2022 KeepForce, Inc. All rights reserved</span>
                </div>

                <div className='social-icon-link'>
                    <a href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/">Termos de serviços</a>
                    <a href="https://www.salesforce.com/br/company/privacy/">Legal</a>
                    <a href="https://www.salesforce.com/br/company/privacy/">Declaração de privacidade</a>
                    <a href="https://www.salesforce.com/br/company/disclosure/">Divulgação responsável</a>
                    <a href="https://trust.salesforce.com/pt-BR">Segurança</a>
                    <a href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-glob-footer-11">Contato</a>
                </div>
            </div>
        </>
    );
}

export default Footer;