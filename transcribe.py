import os
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

from faster_whisper import WhisperModel

audio = "Video by nocode.joshua [DYxss26Tha_].m4a"
model = WhisperModel("small", device="cpu", compute_type="int8")

segments, info = model.transcribe(audio, beam_size=5)

print(f"Detected language: {info.language} (prob {info.language_probability:.2f})")
print(f"Duration: {info.duration:.1f}s\n")

lines = []
for seg in segments:
    line = f"[{seg.start:6.2f} -> {seg.end:6.2f}] {seg.text.strip()}"
    print(line)
    lines.append(line)

with open("transcript.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
