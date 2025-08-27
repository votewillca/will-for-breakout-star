import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export function FAQAccordion() {
  return (
    <div className="bg-card/70 max-w-sm rounded-lg p-6 text-sm shadow-lg">
      <h2 className="text-center text-2xl font-semibold">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>No math questions appear?</AccordionTrigger>
          <AccordionContent>
            Try switching to a different browser **(e.g., Chrome, Firefox, Safari—not just tabs)**
            or **wait a full minute**.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>My cooldown keeps resetting.</AccordionTrigger>
          <AccordionContent>
            Voting too early will **reset your cooldown**. Give it a full pause or try a different
            browser.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Still no math questions?</AccordionTrigger>
          <AccordionContent>
            Switch to your **mobile data**. Wait for 1 - 2 hours before going back to your WiFi.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
