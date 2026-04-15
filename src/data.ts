export interface Article {
  id: string;
  title: string;
  punchyTitle: string;
  summary: string;
  fullContent: string;
  ranking: number;
  area: string;
  author: string;
  date: string;
  imageUrl: string;
  url: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Electrically Tunable Graphene-Based Metasurfaces for Terahertz Applications",
    punchyTitle: "Graphene: The Dial for THz",
    summary: "Researchers achieve ultra-fast terahertz wave control using voltage-tuned graphene metasurfaces.",
    fullContent: "The study demonstrates a novel approach to controlling terahertz waves using graphene-based metasurfaces. By applying a small external voltage, the Fermi level of graphene is shifted, allowing for real-time tuning of the metasurface's resonant frequency. This breakthrough enables highly efficient, compact, and fast-switching THz devices for future 6G communications and medical imaging. The tunability range achieved is significantly higher than previous semiconductor-based solutions, marking a major milestone in materials science.",
    ranking: 1,
    area: "Materials Science",
    author: "Dr. Elena Vance",
    date: "2026-04-14",
    imageUrl: "https://picsum.photos/seed/graphene/800/600",
    url: "https://example.com/research/graphene-thz"
  },
  {
    id: "2",
    title: "Tunable Photonic Crystals via Liquid Crystal Infiltration",
    punchyTitle: "Liquid Light Control",
    summary: "Infiltrating photonic crystals with liquid crystals allows for temperature-dependent light steering.",
    fullContent: "Photonic crystals are the backbone of modern optical computing. This research explores how infiltrating these structures with liquid crystals creates a highly tunable environment. By adjusting the temperature or applying an electric field, the refractive index of the liquid crystal changes, effectively 'tuning' the photonic bandgap. This allows for precise steering of light beams within a chip, potentially replacing bulky mechanical components in LIDAR systems and optical routers.",
    ranking: 2,
    area: "Photonics",
    author: "Prof. Julian Thorne",
    date: "2026-04-12",
    imageUrl: "https://picsum.photos/seed/photonics/800/600",
    url: "https://example.com/research/liquid-light"
  },
  {
    id: "3",
    title: "Dynamic Tunability of Superconducting Qubits for Quantum Error Correction",
    punchyTitle: "Quantum Tuning: Error-Free",
    summary: "New flux-tunable couplers allow superconducting qubits to maintain coherence during complex operations.",
    fullContent: "Quantum computing faces a major hurdle: decoherence. This paper introduces a dynamic tuning mechanism for superconducting qubits using flux-tunable couplers. These couplers can be adjusted in nanoseconds to turn qubit-qubit interactions on and off with high precision. This tunability is crucial for implementing surface codes in quantum error correction, as it allows for the isolation of qubits during measurement while maintaining strong coupling during logic gates.",
    ranking: 3,
    area: "Quantum Physics",
    author: "Sarah Chen",
    date: "2026-04-10",
    imageUrl: "https://picsum.photos/seed/quantum/800/600",
    url: "https://example.com/research/quantum-tuning"
  },
  {
    id: "4",
    title: "Tunable Mechanical Metamaterials with Programmable Stiffness",
    punchyTitle: "Soft but Strong: On Demand",
    summary: "3D-printed lattices with embedded fluid channels enable on-the-fly stiffness adjustments.",
    fullContent: "Imagine a material that can be as soft as rubber one moment and as stiff as steel the next. Researchers have developed a mechanical metamaterial that achieves this through programmable fluid pressure. By pumping non-Newtonian fluids through a 3D-printed lattice, the effective Young's modulus can be tuned by over 500%. This has profound implications for soft robotics, wearable tech, and adaptive aerospace structures that need to survive varying load conditions.",
    ranking: 4,
    area: "Mechanical Engineering",
    author: "Marcus Aurelius",
    date: "2026-04-08",
    imageUrl: "https://picsum.photos/seed/lattice/800/600",
    url: "https://example.com/research/mechanical-metamaterials"
  },
  {
    id: "5",
    title: "Tunable Neural Networks via Dynamic Weight Pruning",
    punchyTitle: "AI Brain: Lean & Mean",
    summary: "Dynamic pruning allows AI models to tune their complexity based on available hardware resources.",
    fullContent: "Large Language Models often require massive compute power. This research proposes a 'tunable' architecture where the model can dynamically prune its weights during inference. If running on a mobile device, the model tunes itself to a smaller, faster version; on a server, it scales up to full precision. This is achieved through a novel reinforcement learning agent that monitors hardware latency and adjusts the pruning threshold in real-time without retraining.",
    ranking: 5,
    area: "Artificial Intelligence",
    author: "Dr. Li Wei",
    date: "2026-04-05",
    imageUrl: "https://picsum.photos/seed/ai/800/600",
    url: "https://example.com/research/tunable-ai"
  },
  {
    id: "6",
    title: "Tunable Magnetic Skyrmions in Multilayer Thin Films",
    punchyTitle: "Magnetic Swirls: Tuned",
    summary: "Interface engineering allows for the precise control of skyrmion size and stability for memory tech.",
    fullContent: "Skyrmions are tiny magnetic vortices that could revolutionize data storage. This study shows how the Dzyaloshinskii-Moriya interaction (DMI) can be tuned by varying the thickness of heavy-metal layers in a thin-film stack. This tunability allows for the creation of skyrmions that are stable at room temperature and can be moved with extremely low current densities, paving the way for ultra-dense, low-power 'racetrack' memory devices.",
    ranking: 6,
    area: "Spintronics",
    author: "Hans Zimmer",
    date: "2026-04-01",
    imageUrl: "https://picsum.photos/seed/magnetic/800/600",
    url: "https://example.com/research/skyrmions"
  },
  {
    id: "7",
    title: "Tunable Terahertz Filters Based on Vanadium Dioxide",
    punchyTitle: "VO2: The THz Gatekeeper",
    summary: "Phase-change materials enable thermal tuning of terahertz transmission in metasurfaces.",
    fullContent: "Vanadium dioxide (VO2) undergoes a metal-insulator transition at approximately 68°C. This research leverages this property to create tunable THz filters. By integrating VO2 into a metasurface, the transmission properties can be switched from transparent to opaque with a small temperature change. This thermal tunability is highly repeatable and offers a simple way to modulate THz signals for sensing and security applications.",
    ranking: 7,
    area: "Optics",
    author: "Dr. Sarah Miller",
    date: "2026-03-28",
    imageUrl: "https://picsum.photos/seed/optics/800/600",
    url: "https://example.com/research/vo2-thz"
  },
  {
    id: "8",
    title: "Tunable Bio-Electronic Interfaces with Conductive Polymers",
    punchyTitle: "Bio-Tuning: Syncing with Life",
    summary: "Electrochemical tuning of polymer impedance improves signal quality in neural implants.",
    fullContent: "Interfacing electronics with biological tissue is challenging due to impedance mismatch. This study introduces a tunable bio-electronic interface using PEDOT:PSS conductive polymers. By applying a small bias, the oxidation state of the polymer is tuned, allowing for real-time adjustment of the electrode impedance. This ensures optimal signal-to-noise ratio for neural recording and stimulation, adapting to the changing biological environment over time.",
    ranking: 8,
    area: "Bio-Engineering",
    author: "Prof. Alan Turing",
    date: "2026-03-25",
    imageUrl: "https://picsum.photos/seed/bio/800/600",
    url: "https://example.com/research/bio-electronics"
  },
  {
    id: "9",
    title: "PaliGemma: A Versatile Vision-Language Model for Fine-tuning",
    punchyTitle: "PaliGemma: Vision Meets Language",
    summary: "A new open-source VLM architecture optimized for downstream task performance through efficient pre-training.",
    fullContent: "PaliGemma is a versatile vision-language model that combines SigLIP vision encoders with Gemma language models. This research details how the model is pre-trained on a diverse set of tasks including captioning, object detection, and visual question answering. The architecture is designed to be easily fine-tuned for specific domains, showing state-of-the-art results on benchmarks while maintaining a relatively small parameter count compared to giant models.",
    ranking: 9,
    area: "VLM Research",
    author: "Google Research",
    date: "2026-03-20",
    imageUrl: "https://picsum.photos/seed/paligemma/800/600",
    url: "https://example.com/research/paligemma"
  },
  {
    id: "10",
    title: "Idefics2: Efficient Vision-Language Models at Scale",
    punchyTitle: "Idefics2: Scaling Vision Intelligence",
    summary: "A 8-billion parameter VLM that achieves high performance through improved data curation and architectural tweaks.",
    fullContent: "Idefics2 is the successor to the original Idefics model, focusing on efficiency and performance. By utilizing a more robust training dataset and a refined architecture that better integrates visual features into the language model's latent space, Idefics2 achieves performance comparable to much larger models. The study highlights the importance of high-quality interleaved image-text data for developing strong zero-shot reasoning capabilities.",
    ranking: 10,
    area: "VLM Research",
    author: "Hugging Face",
    date: "2026-03-15",
    imageUrl: "https://picsum.photos/seed/idefics/800/600",
    url: "https://example.com/research/idefics2"
  },
  {
    id: "11",
    title: "LLaVA-NeXT: Stronger LLMs make Stronger VLMs",
    punchyTitle: "LLaVA: The Next Vision Leap",
    summary: "Leveraging the power of Mistral and Vicuna to enhance visual reasoning and instruction following.",
    fullContent: "LLaVA-NeXT (Large Language-and-Vision Assistant) demonstrates that scaling the underlying language model significantly boosts the performance of the overall VLM. By integrating Mistral-7B and Vicuna-13B, the model shows remarkable improvements in understanding complex visual scenes and following multi-step instructions. The research also introduces a new evaluation suite focused on real-world visual reasoning tasks.",
    ranking: 11,
    area: "VLM Research",
    author: "UW-Madison",
    date: "2026-03-10",
    imageUrl: "https://picsum.photos/seed/llava/800/600",
    url: "https://example.com/research/llava-next"
  }
];
