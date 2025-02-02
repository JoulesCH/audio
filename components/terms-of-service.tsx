import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface TermsOfServiceProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Política de Servicio Audio Axiolutions</DialogTitle>
          <DialogDescription>Fecha de entrada en vigor: 01 de enero del 2025</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <section>
            <h3 className="font-bold">1. Introducción</h3>
            <p>
              Bienvenido a Audio Axiolutions, un servicio en línea especializado en la renta de equipos de audio. Al
              utilizar nuestros servicios, usted acepta las siguientes condiciones y términos.
            </p>
          </section>
          <section>
            <h3 className="font-bold">2. Servicios Ofrecidos</h3>
            <p>
              Audio Axiolutions proporciona la renta de equipos de audio, incluyendo pero no limitado a: altavoces,
              micrófonos, mezcladoras, amplificadores y accesorios relacionados.
            </p>
          </section>
          <section>
            <h3 className="font-bold">3. Requisitos de Uso</h3>
            <ul className="list-disc pl-5">
              <li>El usuario debe ser mayor de edad o contar con autorización de un tutor legal.</li>
              <li>
                Se debe proporcionar una identificación válida y un comprobante de domicilio al momento de la renta.
              </li>
              <li>El usuario es responsable del equipo desde la entrega hasta su devolución.</li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">4. Reservaciones y Pagos</h3>
            <ul className="list-disc pl-5">
              <li>Todas las reservaciones deben realizarse con un mínimo de 2 horas de anticipación.</li>
              <li>El pago debe efectuarse al momento de la reserva a través de los métodos de pago aceptados.</li>
              <li>
                Si se indica, se podrá requerir un depósito en garantía, reembolsable tras la devolución del equipo en
                condiciones adecuadas.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">5. Entrega y Devolución</h3>
            <ul className="list-disc pl-5">
              <li>
                Si se especifíca, el equipo puede ser recogido en nuestras instalaciones o entregado a la dirección
                proporcionada por el usuario (con costo adicional si aplica).
              </li>
              <li>La devolución debe realizarse en la fecha y horario acordados.</li>
              <li>Penalizaciones aplican en caso de retraso o daños en el equipo.</li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">6. Cancelaciones y Reembolsos</h3>
            <ul className="list-disc pl-5">
              <li>
                Se pueden realizar cancelaciones con un aviso de al menos 24 horas antes de la fecha de renta para
                obtener un reembolso parcial o completo, según las condiciones especificadas en el sitio.
              </li>
              <li>No se realizan reembolsos en caso de cancelaciones fuera del periodo permitido.</li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">7. Uso y Responsabilidad</h3>
            <ul className="list-disc pl-5">
              <li>
                El usuario debe utilizar el equipo de manera responsable y conforme a las instrucciones proporcionadas.
              </li>
              <li>Queda prohibido subarrendar o modificar el equipo.</li>
              <li>
                En caso de daños o pérdida del equipo, el usuario será responsable de los costos de reparación o
                reposición.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">8. Garantía y Limitación de Responsabilidad</h3>
            <ul className="list-disc pl-5">
              <li>Audio Axiolutions garantiza que el equipo se entrega en condiciones óptimas de funcionamiento.</li>
              <li>No nos hacemos responsables por daños indirectos o incidentales derivados del uso del equipo.</li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">9. Modificaciones a la Política de Servicio</h3>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor
              desde su publicación en nuestro sitio web.
            </p>
          </section>
          <section>
            <h3 className="font-bold">10. Contacto</h3>
            <p>Para cualquier duda o consulta, puede comunicarse con nosotros a través de joules.hdz@gmail.com</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

