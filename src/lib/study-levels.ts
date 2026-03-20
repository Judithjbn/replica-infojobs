export type StudyLevel = {
    id: string
    label: string
}

export const studyLevels: StudyLevel[] = [
    { id: "bachillerato", label: "Bachillerato" },
    { id: "cfgm", label: "Ciclo Formattivo Grado Medio" },
    { id: "cfgs", label: "Ciclo Formattivo Grado Superior" },
    { id: "licenciatura", label: "Licenciatura" },
    { id: "diplomatura", label:"Diplomatura" },
    { id: "doctorado", label:"Doctorado" },
    { id: "eso", label:"Educación Secundaria Obligatoria" },
    { id: "grado", label:"Grado" },
    { id: "ing-superior", label:"Ingeniería Superior" },
    { id: "ing-tecnica", label:"Ingeniería Técnica" },
    { id: "master", label:"Máster" },
    { id: "postgrado", label:"Postgrado" },
    { id: "otros", label:"Otros cursos, títulos o formación no reglada" },
    { id: "sin-estudios", label:"Sin estudios" },
]
export async function getStudyLevels(): Promise<StudyLevel[]> {
    return Promise.resolve(studyLevels)
}