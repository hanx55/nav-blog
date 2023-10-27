import SocialContact from "./SocialContact"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 p-5 text-slate-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mb-8">
            <div className="grid grid-cols-1 gap-y-2">
              <h3 className="font-semibold text-l"> KONTAKTNÍ ÚDAJE</h3>
              <div>
                <p>Telefonní číslo: <strong> +420 724 549 937</strong></p>
                <p>E-mail: <strong><a href="mailto:info@lodenarece.cz">info@lodenarece.cz</a></strong></p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <h3 className="font-semibold text-l"> DALŠÍ INFORMACE</h3>
              <div>
                <p><a href="Kdo jsme">Kdo jsme</a></p>
                <p><a href="Ochrana osobních údajů" target="_blank">Ochrana osobních údajů</a></p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <h3 className="font-semibold text-l"> NAŠI PARTNEŘI</h3>
              <a href="http://www.chatkytrhovky.cz/" target="_blank">chatkytrhovky.cz</a>
            </div>

          </div>


        </div>
      </footer>

      <footer className="bg-black text-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 p-5">
          <div className="flex">
            <p className="text-sm flex-1 text-slate-400">© 2018 - 2023 LODĚ NA ŘECE</p>
            <SocialContact></SocialContact>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer