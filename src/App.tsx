import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import {
  Home,
  Settings,
  NormalAnatomy,
  GingivalLesions,
  OdontogenicCysts,
  OdontogenicTumors,
  EpithelialLesions,
  PigmentedLesions,
  SoftTissue,
  SalivaryGland,
  JawLesions,
  Infections,
  Mucocutaneous,
  Pediatric,
  IHCMolecular,
  Pitfalls,
  Cases,
  Assessment
} from '@/pages'
import { initializeTheme, useThemeStore } from '@/store/theme'

function App() {
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    const isDark = initializeTheme()
    setTheme(isDark)
  }, [setTheme])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/normal" element={<NormalAnatomy />} />
        <Route path="/gingiva" element={<GingivalLesions />} />
        <Route path="/cysts" element={<OdontogenicCysts />} />
        <Route path="/odontogenic-tumors" element={<OdontogenicTumors />} />
        <Route path="/epithelial-lesions" element={<EpithelialLesions />} />
        <Route path="/pigmented" element={<PigmentedLesions />} />
        <Route path="/soft-tissue" element={<SoftTissue />} />
        <Route path="/salivary" element={<SalivaryGland />} />
        <Route path="/jaw" element={<JawLesions />} />
        <Route path="/infections" element={<Infections />} />
        <Route path="/mucocutaneous" element={<Mucocutaneous />} />
        <Route path="/pediatric" element={<Pediatric />} />
        <Route path="/ihc-molecular" element={<IHCMolecular />} />
        <Route path="/pitfalls" element={<Pitfalls />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Layout>
  )
}

export default App
