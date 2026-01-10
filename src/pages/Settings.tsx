import { ModuleLayout } from '@/components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useThemeStore } from '@/store/theme'
import { Settings as SettingsIcon, Sun, Moon, Info, AlertTriangle, BookOpen, Shield, Scale } from 'lucide-react'

export function Settings() {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <ModuleLayout
      title="Settings"
      description="Customize your learning experience"
      icon={<SettingsIcon className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-6">
        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>Customize the visual appearance of the app</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Dark Mode</label>
                <p className="text-sm text-muted-foreground">
                  {isDark ? 'Currently using dark theme' : 'Currently using light theme'}
                </p>
              </div>
              <Switch checked={isDark} onCheckedChange={toggleTheme} />
            </div>
          </CardContent>
        </Card>

        {/* About the App */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              About the App
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Dental & Gingival Path Master</h4>
              <p className="text-sm text-muted-foreground">
                A mobile-first, offline-ready educational platform covering Dental, Oral, and
                Gingival Pathology for pathology residents. This app is designed to supplement
                oral pathology rotations and head & neck pathology modules.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Target Audience</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• PGY-1 to PGY-4 Pathology Residents</li>
                <li>• Head & Neck Pathology Fellows</li>
                <li>• Medical students on pathology rotations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Learning Objectives</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Identify odontogenic tissues and classify odontogenic cysts and tumors</li>
                <li>• Recognize benign oral epithelial lesions vs dysplasia vs SCC</li>
                <li>• Distinguish gingival reactive lesions from neoplasms</li>
                <li>• Classify jaw lesions using pattern-based logic</li>
                <li>• Identify oral infections via synthetic microscopy cues</li>
                <li>• Recognize pigmented lesions and understand melanoma mimics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 15 comprehensive educational modules</li>
                <li>• Synthetic diagrammatic illustrations</li>
                <li>• Interactive quizzes with immediate feedback</li>
                <li>• Integrated case-based learning</li>
                <li>• Offline capability</li>
                <li>• Dark mode optimized</li>
              </ul>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Version 1.0.0
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Disclaimers
            </CardTitle>
            <CardDescription>Important information about using this application</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={["educational", "no-phi"]}>
              <AccordionItem value="educational">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Educational Use Only
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    This application is strictly for educational purposes. It is NOT intended
                    for clinical diagnosis, patient care decisions, or treatment guidance.
                    All content is designed to supplement formal medical education and should
                    not replace professional medical training, textbooks, or clinical experience.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="no-phi">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    No Patient Data
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    This application does not collect, store, or process any Protected Health
                    Information (PHI). All images and diagrams are synthetic educational
                    illustrations created for teaching purposes. No real patient data or
                    clinical images are used in this application.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="synthetic">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Synthetic Content
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    All visual content in this application consists of synthetic diagrammatic
                    icons and illustrations. These are educational representations designed
                    to highlight key histologic and anatomic features. They are not photographs
                    or actual microscopy images and should be understood as conceptual aids.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="accuracy">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Scale className="h-4 w-4" />
                    Medical Accuracy
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    While every effort has been made to ensure the accuracy of the medical
                    and pathological information presented, medicine is an evolving field.
                    Users should verify critical information through current medical literature
                    and authoritative sources. The creators of this application assume no
                    liability for any errors, omissions, or outcomes related to the use of
                    this educational material.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="no-treatment">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    No Treatment Advice
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    This application does not provide clinical management or treatment
                    guidance. It focuses solely on pathological recognition and diagnostic
                    reasoning patterns. For treatment recommendations, users should consult
                    appropriate clinical guidelines, attending physicians, and current
                    medical literature.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  )
}
