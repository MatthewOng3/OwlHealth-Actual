import { Template } from "@/app/util/types/data-types";

export const DATA_TEMPLATES:Template[] = [
{
    id: 1, name: 'SOAP', times_used: 4, last_used: '2024-01-15',
    body: `
Subjective: \\
- [Mention reasons for visit, chief complaints such as requests, symptoms etc] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Mention Duration/timing/location/quality/severity/context of complaint] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Mention List anything that worsens or alleviates the symptoms, including self-treatment attempts and their effectiveness] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Progression: Mention describe how the symptoms have changed or evolved over time] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Previous episodes: Mention detail any past occurrences of similar symptoms, including when they occurred, how they were managed, and the outcomes] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Mention Impact on daily activities: explain how the symptoms affect the patient's daily life, work, and activities.] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Associated symptoms: Mention any other symptoms (focal and systemic) that accompany the reasons for visit & chief complaints] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\

Past Medical History: \\
- [Mention Contributing factors including past medical and surgical history, investigations, treatments, relevant to the reasons for visit and chief complaints] \\
- [Mention Social history that may be relevant to the reasons for visit and chief complaints.] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Mention Family history that may be relevant to the reasons for visit and chief complaints.] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Mention Exposure history] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Mention Immunization history & status] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\
- [Other: Mention Any other relevant subjective information] (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank) \\

Objective: \\
- [Vitals signs (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\
- [Physical or mental state examination findings, including system specific examination(s) (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\
- [Investigations with results] (you must only include completed investigations and the results of these investigations have been explicitly mentioned in the transcript, contextual notes or clinical note, otherwise you must leave investigations with results blank. All planned or ordered investigations must not be included under Objective; instead all planned or ordered investigations must be included under Plan.) \\

Assessment: \\
- [Likely diagnosis (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\
- [Differential diagnosis (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\

Plan: \\
- [Investigations planned (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\
- [Treatment planned (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\
- [Relevant other actions such as counselling, referrals etc (only include if explicitly mentioned in the transcript, contextual notes or clinical note, otherwise leave blank)] \\

(Never come up with your own patient details, assessment, plan, interventions, evaluation, and plan for continuing care - use only the transcript, contextual notes or clinical note as a reference for the information include in your note.) \\
`
},
{
    id: 2, name: 'Referral', times_used: 8, last_used: '2024-01-10',
    body: `
Dear [Insert Name of clinician the letter is addressed to], \\
\\
Thank you for seeing the patient below. \\
\\
Re: [Patient's Full Name] \\
\\
I am writing to refer my patient, [Patient's Full Name], who is known with [Medical Condition 1, Medical Condition 2 etc] and is currently using [Medication 1, Medication 2 etc]. \\
\\
They presented to me today with the following problem [History of presenting complaint, Reason for visit, Issues discused etc] \\
\\
Your expertise would be greatly appreciated in assisting with further management strategies for this patient. \\
\\
Thank you for your attention to this matter. \\
\\
Yours sincerely, \\
[Clinician's title, name and surname] \\
[Clinician type/Specialty] \\
\\
(Never make up any details about the clinician, the patient and the patients medical history, examination findings, assessment, diagnoses or management plan.) \\
`
}
]