window.FORM_CONFIG = {
  "source": "phonist",
  "repo": "phonist_form",
  "product": "phonist",
  "sourceForm": "phonist.html",
  "context": "smart lockscreen ios & terminal secret clearance archive",
  "motif": "✆",
  "media": "6 foto (2 lockscreen + 4 gallery) + 1 file musik MP3",
  "theme": "phone",
  "palette": [
    "#0A0A0C",
    "#18181B",
    "#3B82F6",
    "#10B981",
    "#F4F4F5",
    "#818CF8"
  ],
  "price": 25000,
  "sections": [
    {
      "id": "02",
      "title": "core identity & birthday lockscreen",
      "fields": [
        {
          "key": "recipient_name",
          "label": "nama teman / yang berulang tahun (recipient)",
          "placeholder": "default: selion",
          "long": false,
          "required": false
        },
        {
          "key": "sender_name",
          "label": "nama pengirim / bestie (sender)",
          "placeholder": "default: kenzo",
          "long": false,
          "required": false
        },
        {
          "key": "birthday_date",
          "label": "tanggal ulang tahun",
          "placeholder": "default: november 6, 2026",
          "long": false,
          "required": false
        },
        {
          "key": "age",
          "label": "umur yang dirayakan",
          "placeholder": "default: 18",
          "long": false,
          "required": false
        },
        {
          "key": "lockscreen_date",
          "label": "tampilan hari & tanggal lockscreen",
          "placeholder": "default: friday, november 6",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "03",
      "title": "lockscreen dynamic notifications (4 messages)",
      "fields": [
        {
          "key": "notif_1",
          "label": "notif 1 (11:58 pm · kenzo)",
          "placeholder": "default: yo selion, u still awake?",
          "long": false,
          "required": false
        },
        {
          "key": "notif_2",
          "label": "notif 2 (12:00 am · kenzo)",
          "placeholder": "default: it's officially midnight right now. happy 18th birthday my brother!!",
          "long": false,
          "required": false
        },
        {
          "key": "notif_3",
          "label": "notif 3 (12:00 am · kenzo)",
          "placeholder": "default: welcome to adulthood man. left something inside your phone.",
          "long": false,
          "required": false
        },
        {
          "key": "notif_4",
          "label": "notif 4 (clearance status)",
          "placeholder": "default: accessing selion's 18th birthday clearance > why is this on my hand?",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "04",
      "title": "terminal clearance & confidential letter",
      "fields": [
        {
          "key": "secret_heading",
          "label": "judul clearance letter",
          "placeholder": "default: a confidential letter from kenzo.",
          "long": false,
          "required": false
        },
        {
          "key": "secret_message",
          "label": "isi surat rahasia clearance terminal",
          "placeholder": "default: to selion, on your 18th birthday: they say the people who enter your life and make you feel truly understood are rare, and having you as someone so important to me is something i will always cherish...",
          "long": true,
          "required": false
        }
      ]
    },
    {
      "id": "05",
      "title": "imessage chat conversation (full dialogue)",
      "fields": [
        {
          "key": "chat_flow",
          "label": "dialog chat imessage (lengkap)",
          "placeholder": "default: yo selion -> u still awake? -> happy 18th birthday my brother!! -> welcome to adulthood man...",
          "long": true,
          "required": false
        }
      ]
    },
    {
      "id": "06",
      "title": "camera roll gallery (4 candid photos)",
      "fields": [
        {
          "key": "cam_1",
          "label": "foto 1 · caption & tag",
          "placeholder": "default: brotherhood since day one. (candid moments)",
          "long": false,
          "required": false
        },
        {
          "key": "cam_2",
          "label": "foto 2 · caption & tag",
          "placeholder": "default: chaotic late night rides. (everyday vibes)",
          "long": false,
          "required": false
        },
        {
          "key": "cam_3",
          "label": "foto 3 · caption & tag",
          "placeholder": "default: always got your back. (quiet memories)",
          "long": false,
          "required": false
        },
        {
          "key": "cam_4",
          "label": "foto 4 · caption & tag",
          "placeholder": "default: level 18 unlocked. (sweet 18 legend)",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "07",
      "title": "final birthday letter & greeting",
      "fields": [
        {
          "key": "final_greeting",
          "label": "greeting penutup",
          "placeholder": "default: happy 18th birthday, selion.",
          "long": false,
          "required": false
        },
        {
          "key": "final_message",
          "label": "isi surat utama penutup (lengkap)",
          "placeholder": "default: happy 18th birthday, selion! it honestly feels unreal that you're officially 18 today. from all the late night talks, blasting our favorite tracks with the windows down, inside jokes that make zero sense to anyone else...",
          "long": true,
          "required": false
        },
        {
          "key": "final_sign",
          "label": "tanda tangan surat penutup",
          "placeholder": "default: - yours truly, kenzo.",
          "long": false,
          "required": false
        }
      ]
    }
  ]
};
