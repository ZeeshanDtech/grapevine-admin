import "./login.scss";

export default function Login() {

	return (
		<>
	 <div className="d-flex flex-column flex-root" id="kt_app_root">
        {/*begin::Authentication - Sign-in */}
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Logo*/}
          <a href="/metronic8/demo1/index.html" className="d-block d-lg-none mx-auto py-20">
            <img alt="Logo" src="/metronic8/demo1/assets/media/logos/default.svg" className="theme-light-show h-25px" />
            <img alt="Logo" src="/metronic8/demo1/assets/media/logos/default-dark.svg" className="theme-dark-show h-25px" />
          </a>    
          {/*end::Logo*/}
          {/*begin::Aside*/}
          <div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">         
            {/*begin::Wrapper*/}
            <div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
              {/*begin::Header*/}
              <div className="d-flex flex-stack py-2">
                {/*begin::Back link*/}
                <div className="me-2">
                </div>                 
                {/*end::Back link*/}   
                {/*begin::Sign Up link*/}
                <div className="m-0">
                  <span className="text-gray-500 fw-bold fs-5 me-2" data-kt-translate="sign-in-head-desc">
                    Not a Member yet?
                  </span>
                  <a href="/metronic8/demo1/authentication/layouts/fancy/sign-up.html" className="link-primary fw-bold fs-5" data-kt-translate="sign-in-head-link">
                    Sign Up
                  </a>       
                </div>
                {/*end::Sign Up link-*/}      
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}           
              <div className="py-20">
                {/*begin::Form*/}
                <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="/metronic8/demo1/index.html" action="#">
                  {/*begin::Body*/}   
                  <div className="card-body">
                    {/*begin::Heading*/}
                    <div className="text-start mb-10">
                      {/*begin::Title*/}
                      <h1 className="text-gray-900 mb-3 fs-3x" data-kt-translate="sign-in-title">
                        Sign In
                      </h1>
                      {/*end::Title*/}
                      {/*begin::Text*/}
                      <div className="text-gray-500 fw-semibold fs-6" data-kt-translate="general-desc">
                        Get unlimited access &amp; earn money
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*begin::Heading*/}
                    {/*begin::Input group-*/}
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      {/*begin::Email*/}
                      <input type="text" placeholder="Email" name="email" autoComplete="off" data-kt-translate="sign-in-input-email" className="form-control form-control-solid" /> 
                      {/*end::Email*/}
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>
                    {/*end::Input group-*/}
                    <div className="fv-row mb-7 fv-plugins-icon-container">    
                      {/*begin::Password*/}
                      <input type="text" placeholder="Password" name="password" autoComplete="off" data-kt-translate="sign-in-input-password" className="form-control form-control-solid" />
                      {/*end::Password*/}
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>
                    {/*end::Input group-*/}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
                      <div />
                      {/*begin::Link*/}
                      <a href="/metronic8/demo1/authentication/layouts/fancy/reset-password.html" className="link-primary" data-kt-translate="sign-in-forgot-password">
                        Forgot Password ?
                      </a>
                      {/*end::Link*/}
                    </div>
                    {/*end::Wrapper*/}   
                    {/*begin::Actions*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Submit*/}
                      <button id="kt_sign_in_submit" className="btn btn-primary me-2 flex-shrink-0">
                        {/*begin::Indicator label*/}
                        <span className="indicator-label" data-kt-translate="sign-in-submit">
                          Sign In
                        </span>
                        {/*end::Indicator label*/}
                        {/*begin::Indicator progress*/}
                        <span className="indicator-progress">
                          <span data-kt-translate="general-progress">Please wait...</span>
                          <span className="spinner-border spinner-border-sm align-middle ms-2" />
                        </span>
                        {/*end::Indicator progress*/}
                      </button>
                      {/*end::Submit*/}
                      {/*begin::Social*/}
                      <div className="d-flex align-items-center">
                        <div className="text-gray-500 fw-semibold fs-6 me-3 me-md-6" data-kt-translate="general-or">Or</div>
                        {/*begin::Symbol*/}
                        <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                          <img alt="Logo" src="/metronic8/demo1/assets/media/svg/brand-logos/google-icon.svg" className="p-4" />
                        </a>
                        {/*end::Symbol*/}
                        {/*begin::Symbol*/}
                        <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                          <img alt="Logo" src="/metronic8/demo1/assets/media/svg/brand-logos/facebook-3.svg" className="p-4" />
                        </a>
                        {/*end::Symbol*/}
                        {/*begin::Symbol*/}
                        <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light">
                          <img alt="Logo" src="/metronic8/demo1/assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show p-4" />
                          <img alt="Logo" src="/metronic8/demo1/assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show p-4" />
                        </a>
                        {/*end::Symbol*/}
                      </div>
                      {/*end::Social*/}
                    </div>
                    {/*end::Actions*/}
                  </div> 
                  {/*begin::Body*/}
                </form>
                {/*end::Form*/} 
              </div>         
              {/*end::Body*/}
              {/*begin::Footer*/}
              <div className="m-0">             
                {/*begin::Toggle*/}
                <button className="btn btn-flex btn-link rotate" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                  <img data-kt-element="current-lang-flag" className="w-25px h-25px rounded-circle me-3" src="/metronic8/demo1/assets/media/flags/united-states.svg" alt="" />
                  <span data-kt-element="current-lang-name" className="me-2">English</span>
                  <i className="ki-duotone ki-down fs-2 text-muted rotate-180 m-0" />              </button>
                {/*end::Toggle*/}
                {/*begin::Menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4" data-kt-menu="true" id="kt_auth_lang_menu">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/metronic8/demo1/assets/media/flags/united-states.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">English</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/metronic8/demo1/assets/media/flags/spain.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">Spanish</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/metronic8/demo1/assets/media/flags/germany.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">German</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/metronic8/demo1/assets/media/flags/japan.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">Japanese</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/metronic8/demo1/assets/media/flags/france.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">French</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}           
              </div>
              {/*end::Footer*/} 
            </div>
            {/*end::Wrapper*/}    
          </div>
          {/*end::Aside*/}       
          {/*begin::Body*/}
          <div className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat" style={{backgroundImage: 'url(/metronic8/demo1/assets/media/auth/bg11.png)'}}>  
          </div>
          {/*begin::Body*/}
        </div>
        {/*end::Authentication - Sign-in*/}</div>
		</>
	);
}
