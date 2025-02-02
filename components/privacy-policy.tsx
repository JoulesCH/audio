import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PrivacyPolicyProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Política de Privacidad de Audio Axiolutions</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <section>
            <h3 className="font-bold">1. Responsable del Tratamiento de Datos Personales</h3>
            <p>
              Audio Axiolutions (en adelante, 'nosotros' o 'el sitio web') informa a sus usuarios que no recaba,
              almacena ni procesa datos personales a través de este sitio.
            </p>
          </section>
          <section>
            <h3 className="font-bold">2. Datos Personales Recopilados</h3>
            <p>
              Nuestro sitio web no solicita, almacena ni procesa ningún tipo de dato personal. La única acción
              disponible en el sitio es un botón que redirige a los usuarios a WhatsApp para una comunicación directa.
            </p>
          </section>
          <section>
            <h3 className="font-bold">3. Finalidad del Enlace a WhatsApp</h3>
            <p>
              El botón de WhatsApp en nuestro sitio web es una herramienta de contacto directo. Cualquier información
              compartida por el usuario a través de WhatsApp es gestionada conforme a los términos y políticas de
              privacidad de WhatsApp, los cuales pueden consultarse en su sitio web oficial.
            </p>
          </section>
          <section>
            <h3 className="font-bold">4. Uso de Cookies y Tecnologías Similares</h3>
            <p>
              No utilizamos cookies, trackers ni tecnologías de seguimiento para recopilar información de los usuarios
              que visitan nuestro sitio.
            </p>
          </section>
          <section>
            <h3 className="font-bold">5. Enlaces a Terceros</h3>
            <p>
              Nuestro sitio puede contener enlaces a plataformas externas (como WhatsApp). No nos hacemos responsables
              de las políticas de privacidad o prácticas de terceros.
            </p>
          </section>
          <section>
            <h3 className="font-bold">6. Modificaciones al Aviso de Privacidad</h3>
            <p>
              Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio
              será publicado en esta misma sección del sitio web.
            </p>
          </section>
          <section>
            <h3 className="font-bold">7. Contacto</h3>
            <p>
              Si tienes alguna pregunta sobre este aviso de privacidad, puedes comunicarte con nosotros a través de
              WhatsApp.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

