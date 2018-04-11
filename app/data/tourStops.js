/* eslint-disable max-len */

import uuid from "uuid";

export const tourStops = [
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 0,
    shortTitle: "Overview",
    longTitle: "Overview: The early years",
    shortCredit: "7th floor time line, The Andy Warhol Museum, Pittsburgh",
    longCredit: "7th floor time line, The Andy Warhol Museum, Pittsburgh",
    regions: ["overview", "tactiles"],
    imageURL: "earlyYears.png",
    imageWidth: 475,
    imageHeight: 329,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Welcome",
        duration: 27,
        speaker: "Patrick Moore",
        audioURL: "1-Welcome_Patrick Moore",
        transcript:
          "<i>Director Patrick Moore:</i>\n\nHi, I’m Patrick Moore. I’m the director of The Andy Warhol Museum.\n\nWelcome to The Warhol. The Andy Warhol Museum was opened in 1994 and it has the world’s largest public holdings of Warhol’s art and archival collections.\n\nThe Warhol is arranged chronologically so the museum displays the collection starting on the seventh floor and works down through Warhol’s life and art through the second floor."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 0,
        title: "The Early Years",
        duration: 53,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_7th-Floor-Overview",
        transcript:
          "<i>Donald Warhola:</i>\n\nHi, my name is Donald Warhola. I’m a nephew of Andy Warhol, and I work here at The Andy Warhol Museum. \n\nSome of the major themes I see throughout the seventh floor are just telling the story of the early life of Andy Warhol, through photographs, through texts, through examples of the works that he did not only as a student but also as a commercial artist. \n\nI think it’s great to really look at and learn about the early life of Andy Warhol and his family. I believe that we all develop the foundation of who we are throughout our early years. So not only do you see the after-the-fact, the works of an artist—in this case, Andy Warhol—but you see some of the influences, some of the experiences that he had during his early life, and you also see that evolution."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 1,
    shortTitle: "Childhood",
    longTitle: "Childhood",
    regions: ["blue"],
    imageURL: "childhood.png",
    imageWidth: 337,
    imageHeight: 475,
    imageAccessibilityLabel: "",
    shortCredit:
      "<i>Andy Warhol at about the age of 3, with his mother Julia and brother John</i>, 1932",
    longCredit:
      "Unknown Photographer \n<i>Andy Warhol at about the age of 3, with his mother Julia and brother John</i>, 1932 \nsepia print \n2 1/4 x 1 5/8 in. (5.7 x 4.1 cm.) \nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc. \n1998.3.5247",
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 19,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald-Childhood_Introduction",
        transcript:
          "<i>Donald Warhola:</i>\n\nHi, my name is Donald Warhola. I’m a nephew of Andy Warhol, and I work here at The Andy Warhol Museum. \n\nAndy Warhol was born Andrew Warhola in the Soho section of Pittsburgh, Pennsylvania, on August 6, 1928, and he lived here until he graduated from Carnegie Tech when he was 20 years old."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 69,
        speaker: "Narrator",
        audioURL: "Childhood_Visual",
        transcript:
          "<i>Narrator:</i>\n\nThis sepia-toned, formal portrait photograph features a woman posing with two young boys. \n\nThe woman, Julia Warhola, is positioned at the center of the image, looking directly at us. She wears a dark fur coat, a bell-shaped cloche hat with an upturned brim, glasses with round wire frames, and a thin smile. \n\nIn front of her, on our left, stands a young boy, John Warhola, dressed in a dark blazer and tie. His hair is trimmed, and his ears stick out as he looks past us to our right with a curious, but neutral expression. \n\nOn our right, seated on a high stool with his mother’s arm behind him, is a toddler in a long woolen overcoat: young Andy Warhol. With chubby cheeks, full lips, and a round head of straight blonde hair, he stares at us with his mouth slightly open. \n\nThis image is a facsimile of the original worn photograph and features nicks and imperfections along the edges. A diagonal tear rises up from the lower left hand corner, and a blue-tinted crease mars the image to the upper right of center."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 0,
        title: "The Warholas",
        duration: 47,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Childhood_Warhola_Family",
        transcript:
          "<i>Donald Warhola:</i>\n\nAndy Warhol was born here in Pittsburgh, in the South Oakland section of Pittsburgh. \n\nHis parents came here; they immigrated from what’s present-day eastern Slovakia, a small village called Miková. At the time, the borders were changing—actually, when Andrej came over it was still Austria-Hungary. He came over in 1912. It took nine years for Julia to join him. Because of the outbreak of World War I, she was not able to leave the country until after the war, so she came over in 1921, and they started a family in 1922. \n\nPaul was the first who was born; dad—John Warhola—was the second son who was born in 1925, and Andy was born in 1928."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 1,
        title: "Family portrait",
        duration: 25,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Childhood_Family_portrait",
        transcript:
          "<i>Donald Warhola:</i>\n\nThis is a photograph of my grandmother Julia, as well as Andy when he was about 2 years old, and my father when he was about 5. \n\nAnd this is a professional photograph, but I like it for a strange reason that Paul and Andrej are not in the photograph. And most likely Paul was at school, and Andrej was at work. And that’s just the way Julia was, very spontaneous."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 0,
        title: "Growing up during the Depression",
        duration: 27,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Childhood_Growing_Up_in_the_Depression",
        transcript:
          "<i>Donald Warhola:</i>\n\nUncle Andy was born in 1928, and the Great Depression in America happened in 1929. So you can imagine not only starting anew in the United States, but also facing deep economic problems in the United States. \n\nAnd dad would tell how they would—all the boys would sleep in one bed, mom and dad would sleep in another, and that was it. That was the bedroom, and they would take a bath together because you had to save water."
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: "“All I Want for Christmas”",
        duration: 49,
        speaker: "Donald Warhola",
        audioURL: "Warhola_John_Movie_Projector-v2",
        transcript:
          "<i>Donald Warhola:</i>\n\nJohn Warhola, Andy Warhol’s brother, talks about how Andy got his first movie projector. \n\n<i>John Warhola</i>: \nWhat he really wanted for Christmas was he used to talk about that he wanted a movie projector, you know. The kids then, his age, they didn’t want that. They wanted toys or something, and my mother says, “Well, I’d have to save up.” \n\nMy mother used to get a dollar to do some housework. One or two days she’d go to a person’s house and do some laundry, iron the shirts, make a dollar. She saved like nine dollars because she wouldn’t even ask my dad for that money. That would be a nightmare, she wouldn’t even ask. So she saved nine dollars and bought Andy that movie projector."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 2,
    shortTitle: "College years",
    longTitle: "College years",
    regions: ["blue"],
    imageURL: "2017-1-1_int_01-Web_Ready_(475px_longest_edge)_-_Check_Copyright_Before_Using_on_Web.jpg",
    imageWidth: 383,
    imageHeight: 475,
    imageAccessibilityLabel: "",
    shortCredit:
      "Philip Pearlstein, <i>Art Class</i>, 1946-47",
    longCredit:
      "Philip Pearlstein, <i>Art Class</i>, 1946-47\nThe Andy Warhol Museum, Pittsburgh; Gift of Dorothy Cantor and Philip Pearlstein\n2017.1.1",
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 32,
        speaker: "Jessica Beck",
        audioURL: "1_Introduction_JessicaBeck_CollegeYears",
        transcript:
          "<i>Jessica Beck:</i>\n\nHi. My name is Jessica Beck. I’m the Milton Fine Curator of Art here at The Andy Warhol Museum.\n\nWe are looking at an early college work by Philip Pearlstein that was painted between 1946 and ’47. Philip Pearlstein was one of Andy Warhol’s classmates from Carnegie Tech, which we now know as Carnegie Mellon University.\n\nIt was a class assignment done at Carnegie Tech, and it depicts Andy Warhol as a young student. And I particularly love this image because it really captures Warhol’s unique body language, unique form, the sort of spirit of Warhol at a young age, particularly his hands. And it’s really fascinating to think how these hands would turn out to be the hands of one of the most important artists of the twentieth century."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 52,
        speaker: "Narrator",
        audioURL: "6_VisualDescription_ArtClass",
        transcript:
          "<i>Narrator:</i>\n\nRendered with a rich pastel palette, and discernible brushstrokes and sponge marks, this painting depicts four students in an art class, each working on their own drawing. Two subjects sit in the background with their heads down, focused on the artwork they hold in their laps.\n\nSeated in the foreground, a man holds his paper and backing board in his lap, but instead focuses on the work of the woman beside him. The man is blonde, lean, and bespectacled. He wears brown loafers and pants, a peach-colored shirt with an open collar, and a blue sweater vest.\n\nThe woman sits at our right wearing teal shoes, a tan skirt, a salmon-colored blouse, and turquoise cat eye glasses. Beneath her wooden stool in tiny uppercase letters is the handwritten name “Pearlstein.”"
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "Carnegie Tech classmates",
        duration: 46,
        speaker: "Jessica Beck",
        audioURL: "2_ClassmatesAtCarnegie_JessicaBeck",
        transcript:
          "<i>Jessica Beck:</i>\n\nPhilip Pearlstein, Andy Warhol, and Dorothy Cantor were all classmates at Carnegie Tech in the early ’40s.\n\nPhilip Pearlstein was slightly different than Warhol because he was drafted and went to the war. He came back in the fall of 1946, on the GI Bill to finish his years at Carnegie Tech.\n\nAnd when they graduated in 1949, they both went to New York together, shared a small apartment studio. And a year later, Dorothy Cantor, who was a year younger than Philip and Andy, came up to New York as well.\n\nShe also was striving to be an artist. And Philip and Dorothy got married, started a family. And like many women of this generation, sort of put her career aside to support the career of her husband."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 1,
        title: "Pearlstein and Warhol",
        duration: 29,
        speaker: "Jessica Beck",
        audioURL: "3_PhilipPearlstein_JessicaBeck",
        transcript:
          "<i>Jessica Beck:</i>\n\nBoth Andy Warhol and Philip Pearlstein went into New York with the goal of landing a design job, or an illustration job of some kind in advertising or design coming from their studies of industrial design at Carnegie Tech.\n\nIn an interesting way, they hit New York together. They go on interviews together, but their careers take off in different periods. And, ultimately, Warhol ends up becoming, historically, the more celebrated artist of the two."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 1,
        title: "Cantor's kittens",
        duration: 33,
        speaker: "Jessica Beck",
        audioURL: "4_CantorsKittens_JessicaBeck",
        transcript:
          "<i>Jessica Beck:</i>\n\nWhen you turn the corner, and you move out of this first college year period on the seventh floor, and you transition into Warhol’s entry point into New York in 1949, you’ll see these really delicate sweet drawings of kittens done by Dorothy Cantor.\n\nAnd so because of the close friendship that he had with Phillip and Dorothy Cantor, he gifted them two kittens. And it’s really sweet to see these drawings as kind of a symbol of their friendship, and their connection."
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: '"How does it feel to be famous?"',
        duration: 76,
        speaker: "Philip Pearlstein",
        audioURL: "Pearlstein_HowDoesItFeelToBeFamous",
        transcript:
          '<i>Jessica Beck:</i>\n\nWarhol\'s friend Philip Pearlstein describes meeting Warhol at Carnegie Tech.\n\n<i>Philip Pearlstein:</i>\n\nAfter that we came back—after we came back to Pittsburgh, I went to—on the GI Bill—back to my—for my second year at Carnegie. And the class was made up of about 30 veterans from various services, some of them into their 40s of years of age. There were two young men. One of them walked up to me and said, "How does it feel to be famous?" And he was referring to Life magazine, and they had been told this formidable—whatever you want to call it—this coming back to school. And this was Andy Warhol. He said, "How\'s it feel to be famous?" And I said, "Well, it only lasted five minutes." But we became close friends, and he set up his easel next to mine and we were very close friends for the next three years.'
        },
        {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: 'Warhol\'s college work',
        duration: 30,
        speaker: "Jessica Beck",
        audioURL: "5_WarholsCollegeWork_JessicaBeck",
        transcript:
          '<i>Jessica Beck:</i>\n\nThe interesting thing about Warhol’s college work is that it’s very unexpected. People don’t necessarily expect to see such a naive hand from Warhol.\n\nWhat’s so fascinating about the collection here at The Andy Warhol Museum is that we can show this period for Warhol, this nascent period, where he’s working out ideas like so many artists kind of figuring out his style, and just truly taking creative risks at this period, and exercising different parts of his stylistic palette.'
        }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 3,
    shortTitle: "New York",
    longTitle: "From Pittsburgh to New York",
    regions: ["orange", "olive"],
    imageURL: "newYork.png",
    imageWidth: 475,
    imageHeight: 469,
    imageAccessibilityLabel: "",
    shortCredit:
      "Leila Davies Singelis, <i>Making the Rounds</i>, 1950 © Estate of Leila Davies Singelis",
    longCredit:
      "Leila Davies Singelis \n<i>Making the Rounds</i>, 1950 \ngelatin silver print \n8 3/16 x 8 in. (20.8 x 20.3 cm.) \nThe Andy Warhol Museum, Pittsburgh; Gift of Leila Davies Singelis \n© Estate of Leila Davies Singelis \n1994.22.9.1",
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 42,
        speaker: "Jessica Beck",
        audioURL: "Beck_Jessica_New-York_Introduction",
        transcript:
          "<i>Jessica Beck:</i>\n\nHello, my name is Jessica Beck. I’m the Milton Fine curator of art here at The Andy Warhol Museum.\n\nThis beautiful 1950s photograph of Warhol walking the streets in New York by Leila Davies Singelis is a prime example of this really sort of fertile time for Warhol in New York.\n\nHe graduated from Carnegie Tech, which we now know as Carnegie Mellon in Pittsburgh, in 1949, with a number of classmates. And one of them was Philip Pearlstein, who is now a prominent painter in his own right. And Philip and Warhol moved to New York together, and they both sought out careers in commercial design, mostly to pay the bills and to pay their rent."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 53,
        speaker: "Narrator",
        audioURL: "PittsburghNewYork_VIsual",
        transcript:
          "<i>Narrator:</i>\n\nThis floor to ceiling enlargement of a slightly askew, black-and-white photograph features a thin young man, Andy Warhol, walking along a sidewalk on a sunny day. \n\nWarhol walks toward us, just to our right of center, dressed in a light-colored suit with a white shirt and bow tie. His hair is neatly combed, revealing a wide, high forehead. He wears glasses with dark, round frames, and a slight smirk on his lips. \n\nUnder his right arm is a large sketchbook, or perhaps a portfolio, while his left arm hangs straight down at his side. In the background, on our left, is a row of leafy trees at the edge of the sidewalk; on our right is a row of storefronts. Hanging from one of the storefronts, directly behind and above Warhol’s head, is a sign reading “Laundry.”"
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "Pounding the pavement",
        duration: 49,
        speaker: "Jessica Beck",
        audioURL: "Beck_Jessica_New-York_Persona",
        transcript:
          "<i>Jessica Beck:</i>\n\nThe other thing about this photograph that's notable is that you catch Warhol in this very sort of precocious, naïve, a bit shy moment in his career, before 1961 and '62 when he starts crafting a persona with his costume, with his dress—you know, leather jackets, striped shirts of the Silver Factory period. \n\nAt this point he has an oversized suit. It's a little too baggy for him. He's carrying his portfolio, which he sort of pounded the pavement with editors, went in and met with people, was very sort of active in getting his name spread around the commercial design community. So it's also important to note that this is the period before that sort of cool, distant persona started to take shape."
      },

      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 1,
        title: "Dedicated and driven",
        duration: 37,
        speaker: "Jessica Beck",
        audioURL: "Beck_Jessica_New-York_Commercial-Fine-Art",
        transcript:
          "<i>Jessica Beck:</i>\n\nWarhol at this point in his career is very active in commercial design and commercial illustration. \n\nBut, with that said, he always remained very dedicated to building an art career and an art portfolio as well, so it's important to remember that, even at a time when he was on a different track, he always had one foot in this sort of activity of collecting a circle of other artists to be around, getting the attention of gallerists, circulating handmade artist books. So Warhol is very driven at this early first moment in New York."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Success is a job in New York",
        duration: 41,
        speaker: "Jessica Beck",
        audioURL: "Beck_Jessica_New-York_Success",
        transcript:
          '<i>Jessica Beck:</i>\n\nWarhol was exceptionally talented as a commercial illustrator. He figured out a way to speak to editors, made some major success early on in his career with illustration, most notably with <i>Glamour</i> magazine. He illustrated a story called "What is Success?" \n\nOne of the pages of the stories was "Success is a Job in New York," and that kind of sums up Warhol\'s first decade in Manhattan, was that he ended up being hugely successful financially and during his time as a commercial illustrator continued to seek the attention of important dealers. It wasn\'t until 1962 that that finally happened for him.'
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: "Long walks in the city",
        duration: 33,
        speaker: "Jessica Beck",
        audioURL: "Singelis_Walks_in_NewYork",
        transcript:
          "<i>Jessica Beck:</i>\n\nLeila Davies Singelis recalls taking walks with Warhol through the city. \n\n<i>Leila Davies Singelis</i>: \nWe used to do a lot of walking. That was one thing Andy and I did a lot of. And I think we were just—I don't know who was more naïve, Andy or me, actually. But, you know, everything about New York was exciting. Everything was new and interesting and different. I still feel the same way when I go to New York as I always felt, and that is suddenly I'm alive."
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: '"Older and wiser"',
        duration: 39,
        speaker: "Jessica Beck",
        audioURL: "Pearlstein_Moving_to_NYC",
        transcript:
          "<i>Jessica Beck:</i>\n\nWarhol's friend Philip Pearlstein discusses moving to New York with Warhol in 1949. \n\n<i>Philip Pearlstein</i>: \nThen we decided to come up to New York the following year. And Andy, he was very reluctant, and I had a meeting with his two brothers who said they would let Andy come to New York only if he and I would live together, 'cause I was the older and wiser. Anyway, so we came to New York and several of our other friends as well."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 4,
    shortTitle: "Andy and Julia",
    longTitle: "Andy and Julia",
    regions: ["orange"],
    imageURL: "1998-3-1769_int_01.jpg",
    imageWidth: 475,
    imageHeight: 444,
    imageAccessibilityLabel: "",
    shortCredit: "Julia Warhola, <i>Two Angels Praying</i>, ca. 1953",
    longCredit:
      "Julia Warhola, <i>Two Angels Praying</i>, ca. 1953\nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc.\n1998.3.1769",
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 19,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald-Julia_Introduction",
        transcript:
          "<i>Donald Warhola:</i>\n\nHi, my name is Donald Warhola. I’m a nephew of Andy Warhol, and I work here at The Andy Warhol Museum.\n\nThis artwork was done by Julia Warhola, Andy’s mother, who was also an artist. Shortly after Andy moved from Pittsburgh to New York City, Julia also moved to New York to live with Andy."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 38,
        speaker: "Narrator",
        audioURL: "1_VisualDescription_TwoAngelsPraying",
        transcript:
          '<i>Narrator:</i>\n\nIn this child-like black ink line drawing, two angels with feathery wings pray beneath a small cross and an eight-pointed star.\n\nThe angels face one another, reaching out with bent, wavy arms and quickly-rendered hands clasped in prayer. They have curly, bouffant hairdos and long wings of loosely-drawn feathers in place of their bodies.\n\nBetween them, above their hands, is the small cross, which is slightly curved as if bowing to our right. Above it is the small star, which resembles a dark, spinning pinwheel.'
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Signature style",
        duration: 63,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Julia_Signature_style",
        transcript:
          "<i>Donald Warhola:</i> \n\nJulia really enjoyed her art. Art was one of the things that she enjoyed, along with singing, so I believe with that that Uncle Andy was really kind of tuned in and knew that basically that Julia was very talented with her art.\n\nShe kind of focused on drawing cats and angels. That was the two themes that you’ll see throughout a lot of her work, and I believe a lot of that was because her love of animals and her deep religious beliefs.\n\nAnd also Uncle Andy really enjoyed, really admired the way my grandmother would write, that sort of old European style of writing, so any time he had any text to put on any of his works he would have her do it, especially during his commercial art days, and also he would have her sign a lot of his artwork. If you notice you’ll see some of the earlier works were signed with one signature of Andy Warhol, and then after Julia passed away his signature changed. So that was not a coincidence."
      },      
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 1,
        title: "A mother's influence",
        duration: 53,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Julia_Mothers_Influence",
        transcript:
          '<i>Donald Warhola:</i>\n\nI believe Uncle Andy, really I’m sure, was looking for ideas from Julia all the time.\n\nThere is a work, a drawing that Julia did, I think it’s around 1952 of a Campbell’s Soup can, and of course two cats. And it has "Campbell’s Soup, It’s Very Good" sort of almost written in broken English, and I believe—I can’t help but think that influenced Uncle Andy or might have been one piece of the puzzle or one idea that helped Uncle Andy to do the Campbell Soup can paintings and prints that he did.\n\nI believe Uncle Andy was very complex and there was not any one idea that led to his decisions, but I believe that multiple ideas, and I’m sure that that contributed to his decision to do the Campbell’s Soup can.'
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "Living on a prayer",
        duration: 23,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Julia_Prayer",
        transcript:
          "<i>Donald Warhola:</i>\n\nJulia was very religious. \n\nI remember whenever I would visit up in New York Uncle Andy would kneel down and say a prayer with Julia each morning before he left. And again the premise being that it’s a dangerous world, your life is again on this thread, and you should pray for God’s protection and to watch over you to bring you back."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: '"The boss is going to fire me"',
        duration: 42,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Donald_Julia_The_Boss_Is_Going",
        transcript:
          "<i>Donald Warhola:</i>\n\nWhat I always admire about Julia is that she really—I believe she really nurtured my uncle’s artistic talent, and then throughout their life, they had a very mutual love and respect for each other. Julia would help Andy with his art. \n\nI remember being up there as a child and seeing Julia working with Uncle Andy. I remember one occasion where she was talking to my father and Uncle Andy was in the room, too, and Uncle Andy was looking at Julia, and she’s talking to my father, and she’s getting a little nervous, he’s getting a little nervous, and Dad’s talking and talking and Julia had to stop Dad and said, “I’d better get back to work or else the boss is gonna fire me.”"
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: "Julia sings a Carpatho-Rusyn folk song",
        duration: 69,
        speaker: "Donald Warhola",
        audioURL: "Warhola_Julia_Folksong",
        transcript:
          "<i>Donald Warhola:</i>\n\nJulia really enjoyed singing, especially folk songs and religious hymns from the Carpatho-Rusyn culture. The following hymn is Julia singing a song in her native language giving glory to God. \n\n<i>Julia Warhola singing</i>"
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 5,
    shortTitle: "Blotted line",
    longTitle: "Blotted line",
    shortCredit: 'Still from "Blotted Line Video," The Andy Warhol Museum',
    longCredit: 'Still from "Blotted Line Video," The Andy Warhol Museum',
    regions: ["orange"],
    imageURL: "blottedLineStill.png",
    imageWidth: 475,
    imageHeight: 267,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 38,
        speaker: "Abby Franzen-Sheehan",
        audioURL: "Blotted-Line_Introduction_v2",
        transcript:
          "<i>Abby Franzen-Sheehan:</i>\n\nHi, I’m Abby Franzen-Sheehan. I’m the director of publications at The Andy Warhol Museum. \n\nIn the 1950s Andy Warhol became really well known for his commercial work, and specifically, his blotted line. \n\nWhat’s interesting about the blotted line is it really was a precursor to Warhol’s printmaking technique using silkscreen printing. It was a manual printmaking technique, where Warhol was able to draw the lines in ink, on sort of a copy or a print, which he used to blot onto the final drawing. And he could use that source print over and over and over again."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Process and product",
        duration: 57,
        speaker: "Abby Franzen-Sheehan",
        audioURL: "Blotted-Line_Process_v2",
        transcript:
          "<i>Abby Franzen-Sheehan:</i>\n\nWhat really made this wonderful for Warhol at that time was he was able to go to an assignment and meet with an art director and show them three of the same blotted line drawings that he had blotted as prints but they were really—they looked like unique drawings, and he could color them different colors, he could add gold leaf or stamping in them, and the art directors adored having selection and choice. \n\nOther illustrators would show up with their one perfect drawing that they had meticulously worked on, and they couldn’t just easily recreate that or change elements, and this facile way that Warhol was able to create something that looked like a unique hand-drawn piece of art but then kind of recreate it relatively quickly made him extremely popular and gave him a lot of work in the 1950s."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 1,
        title: "From commercial to fine art",
        duration: 40,
        speaker: "Abby Franzen-Sheehan",
        audioURL: "Blotted-Line_Commercial_to_fine",
        transcript:
          "<i>Abby Franzen-Sheehan:</i>\n\nWarhol’s blotted line was inventive, not only because he could make multiples but because he was teaching himself the ins and outs of both commercial printing and what is appealing to the masses. \n\nAnd Warhol was learning how that whole mechanical process works at the same time as he was making his art, and all of these things I think that he learned about the commercial printing process later informed how he created paintings and took that commercial printing process into his own fine art work."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "Creativity and collaboration",
        duration: 50,
        speaker: "Abby Franzen-Sheehan",
        audioURL: "Blotted-Line_Collaboration_v2",
        transcript:
          "<i>Abby Franzen-Sheehan:</i>\n\nWarhol was able to, at an early stage, welcome people in and created sort of a collaborative environment around him. He used to have coloring parties at Serendipity Café in the 1950s, where his blotted line books, or gifts that he would give to clients, he would invite friends to the café to help him color them in with the Doc Martin dyes. \n\nWhile he was always controlling the imagery and controlling how these illustrations were crafted, whether they’d be gold-leafed or painted or just black and white, he did have assistants like Nathan Gluck help him to create the quantity that was necessary for him to maintain his commercial success."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 6,
    shortTitle: "Commercial work",
    longTitle: "Commercial work",
    shortCredit: "Andy Warhol, <i>Baseball Players (Early)</i>, ca. 1950 © AWF",
    longCredit:
      "Andy Warhol, <i>Baseball Players (Early)</i>, ca. 1950\nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc.\n1998.1.1151",
    regions: ["pink"],
    imageURL: "1998-1-1151_int_01.jpg",
    imageWidth: 475,
    imageHeight: 387,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 38,
        speaker: "Jose Diaz",
        audioURL: "1_Introduction_Jose Diaz Work",
        transcript:
          "<i>Jose Diaz:</i>\n\nHello. My name is Jose Diaz, the Milton Fine curator here at The Andy Warhol Museum. \n\nThe amazing thing about Andy is that he rarely turned down any work. He was able to produce work quickly, and he was also able to follow directions. So, because of this, he was able to pick up clients such as <i>Vogue</i>, <i>Mademoiselle</i>, <i>Harper's Bazaar</i>. \n\nHe was also taking on commissions for companies. He would make greeting cards for Tiffany's. He made stationery for Bergdorf Goodman. And he even made placemats for the Bird Cage restaurant in Lord & Taylor. Whatever drawings were actually not selected by the clients he ended up framing and hanging in a small café called Serendipity, where he would sell them."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 54,
        speaker: "Narrator",
        audioURL: "1_VisualDescription_BaseballPlayers",
        transcript:
          "<i>Narrator:</i>\n\nThis cartoon-like line drawing of a professional baseball game features several players in pinstriped uniforms, an umpire, and a section of the distant bleachers on an otherwise blank sheet of off-white Strathmore brand paper.\n\nThe batter, catcher, and umpire are clustered in the foreground near our lower left, facing the pitcher’s mound in the middle ground at our right. Behind the pitcher is a sprinting baserunner, and an outfielder stands in the distance. The batter has already swung and stares up into the sky, as do the umpire, baserunner, and outfielder. At our upper left sits a distant bank of bleachers which is topped with decorative trim and small flags. Inside the bleachers are dozens of tiny faceless circles, representing individual spectators."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 0,
        title: "Consumer culture and Pop Art",
        duration: 49,
        speaker: "Jessica Beck",
        audioURL: "2_Consumer culture and pop_Jessica Beck",
        transcript:
          "<i>Curator Jessica Beck:</i>\n\nHi, I'm Jessica Beck.\n\nIn the 1950s, America is actually going through a really interesting and important moment culturally. It’s post World War II. There’s a boom economically. Culture picks up, consumer culture picks up in an important way which led to a complete renaissance in advertising and newspapers and all sorts of media—the dawn of television and radio. The world had become much more interested in a visual culture.\n\nThe change in visual culture after World War II that started happening in the U.S. [and] was also happening in Europe completely changed the way we thought about art. Another movement had started to take shape and that movement was pop."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 1,
        title: "Unique style",
        duration: 51,
        speaker: "Jessica Beck",
        audioURL: "3_Unique style_Jessica Beck",
        transcript:
          "<i>Curator Jessica Beck:</i>\n\nIn the 1950s when Warhol is first living and working in New York, it’s a moment when many artists were working as commercial illustrators or designers or sometimes window dressers to pay their bills.\n\nWarhol is one of these people but he ends up being very successful with his commercial illustrations because he had a very unique style that was, some could say, naive.\n\nBut very different from his peers, Warhol signed his name to all his work so he had a sense of ownership over this commercial period. It was also a form of practice for him. The vocabulary and the form of editing and cropping that he learned during this early period as a commercial designer ended up becoming touchstones to his formal practice as a painter by 1961. "
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 7,
    shortTitle: "Sketches",
    longTitle: "Warhol's intimate sketches",
    regions: ["pink"],
    imageURL: "1998-1-944_pub_01-Web Ready (475px longest edge) - Check Copyright Before Using on Web.jpg",
    imageWidth: 376,
    imageHeight: 475,
    imageAccessibilityLabel: "",
    shortCredit: "Andy Warhol, <i>Male Head</i>, 1950s © AWF",
    longCredit:
      "Andy Warhol, <i>Male Head</i>, 1950s\nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc.\n© The Andy Warhol Foundation for the Visual Arts, Inc.\n1998.1.944",
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 25,
        speaker: "Grace Marston",
        audioURL: "1_Introduction_GraceMarston",
        transcript:
          "<i>Grace Marston:</i>\n\nHi, this is Grace Marston and I am an artist educator at The Andy Warhol Museum.\n\nWarhol's most well-known portraits of men from the 1950s are drawings from his boy book series done on paper with ballpoint pens. However, he experimented with a variety of other materials.\n\nThroughout this display we see combinations of oil paint, tempera, blotted line drawings, marbleizing, and even spray paint with stencils."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 56,
        speaker: "Narrator",
        audioURL: "5_VisualDescription_MaleHead",
        transcript:
          "<i>Narrator:</i>\n\nSet against a deep violet backdrop, a thin, bare-chested man stares with wide-open eyes.\n\nThe line-drawn subject stands at our lower left, facing the edge of the paper in a three-quarter profile, depicted from the chest up. The man’s arms are raised and crossed above his monk-like hair as if hugging the top of his head. This position exaggerates his protruding shoulder blade, which resembles a bulging hump.\n\nThe subject’s facial features are rendered with considerable detail in fine black ink lines, but no detail is present on his torso. He has full lips, a long nose with a round nostril, low, curving eyebrows, and large, bulging eyes.\n\nBehind and above him, the uneven violet background features discernible roller marks that fade out towards the upper edge of the Strathmore paper."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Subverting the gender paradigm",
        duration: 40,
        speaker: "Grace Marston",
        audioURL: "2_SubvertingTheGenderParadigm_GraceMarston",
        transcript:
          "<i>Grace Marston:</i>\n\nWarhol used many different art supplies for this series of portraits, but they do share some aesthetic traits. Through his color choices and his drawing style, Warhol appears to soften or even feminize these young men.\n\nHe surrounds them with pink and purple backgrounds, sometimes decorating them with hearts, or flowers, or ribbons. Most of these men have very luscious, full lips and long, delicate eyelashes. Pairs of men are shown in really intimate poses, kissing or gently caressing one another.\n\nAnd by including so many traditionally feminine features in his portraits of men, Warhol has daringly subverted the gender paradigm."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 1,
        title: "Gender expectations",
        duration: 25,
        speaker: "Grace Marston",
        audioURL: "3_GenderExpectations_GraceMarston",
        transcript:
          "<i>Grace Marston:</i>\n\nIn 1950s America men were expected to be very tough and macho, and women were expected to be sweet and subservient, and much of Warhol's commercial art catered to these expectations. He knew that his job was to convey what clothing stores and fashion magazines wanted a woman to be.\n\nBut with his more personal art projects Warhol revealed that a man can look just as delicate and beautiful as a woman."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "Developing a queer network",
        duration: 35,
        speaker: "Grace Marston",
        audioURL: "4_DevelopingAQueerNetwork_GraceMarston",
        transcript:
          "<i>Grace Marston:</i>\n\nShortly after arriving in Manhattan in 1949, Andy Warhol tapped into the bustling creative network that is the New York gay community. He met illustrators, set designers, artists, dancers, and musicians, who just like him, had come to New York seeking opportunity and camaraderie.\n\nThese men became his models, his roommates, his friends, his collaborators and his lovers. Forming these relationships provided companionship and some advantages in the New York art world, where making connections is essential. Together they helped each other's careers and enriched one another's lives."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Fearless",
        duration: 62,
        speaker: "Jessica Beck",
        audioURL: "Fearlessness_Jessica Beck",
        transcript:
          "<i>Curator Jessica Beck:</i>\n\nHi. My name is Jessica Beck.\n\nThis young group in New York that starts to emerge around the Pop movement are people like Roy Lichtenstein, Jasper Johns, Robert Rauschenberg, James Rosenquist. These were Warhol’s peers and they were people Warhol wanted to be associated with and he wanted to show with them.\n\nBut there was also a very masculine front happening with the art movement in New York at this time for very obvious reasons. Homosexuality wasn’t something that people talked about. Homosexual relations would still be considered criminal in this moment in New York.\n\nWith Warhol, there was a fearlessness around his sexuality. He did intimate drawings of men kissing. He brought his sexuality into his work. He also wore his sexuality in a way that other people did not with his mannerisms and his gesture and his dress. And so he was seen potentially as a threat to these other artists out of fear that they would somehow be outed as gay, as well."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 8,
    shortTitle: "Process",
    longTitle: "Process and pattern",
    regions: ["pink"],
    imageURL: "1998-1-3_pub_01-Web Ready (475px longest edge) - Check Copyright Before Using on Web.jpg",
    imageWidth: 475,
    imageHeight: 419,
    imageAccessibilityLabel: "",
    shortCredit: "Andy Warhol, <i>Two Heads</i>, ca. 1957 © AWF",
    longCredit:
      "Andy Warhol, <i>Two Heads</i>, ca. 1957\nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc.\n© The Andy Warhol Foundation for the Visual Arts, Inc.\n1998.1.3",
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 35,
        speaker: "Sarah LaRue",
        audioURL: "1_Introduction_SarahLaRue",
        transcript:
          "<i>Sarah LaRue:</i>\n\nHi, this is Sarah LaRue, and I am an artist educator at The Andy Warhol Museum.\n\nIn the 1950s Warhol used a number of different processes for his commercial art.\n\nHe used a blotted line technique, which was a basic form of print making involving a calligraphy pen and India ink, as well as rubber stamping, where he would carve into soft rubber to create an image that he could stamp onto paper in a grid or other composition.\n\nAnd he also used stenciling. Stenciling allowed Warhol to create blocks of color in a certain shape, and also to reproduce text."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 49,
        speaker: "Narrator",
        audioURL: "5_VisualDescription_TwoHeads",
        transcript:
          "<i>Narrator:</i>\n\nThis painting features the heads of two blonde men against a pale mauve and peach backdrop stenciled with black shapes.\n\nThe two heads are sparsely rendered with thin black ink lines and are positioned at the bottom of the canvas, facing one another as if preparing to kiss. While many short lines indicate waves in their tidy side-parted haircuts, only a few of the features in their pale pink faces have been included, conveyed with faint, simple outlines.\n\nBehind the two heads, a variety of distinct shapes adorns the murky pastel-colored backdrop, stenciled onto the canvas with black spray paint. The roughly symmetrical pattern resembles a cross between a modern leopard print and a Rorschach inkblot."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Stamping",
        duration: 27,
        speaker: "Sarah LaRue",
        audioURL: "2_Stamping_SarahLaRue",
        transcript:
          "<i>Sarah LaRue:</i>\n\nStamping enabled Warhol to easily create grid like compositions of repeating images or patterns.\n\nTo make a rubber stamp you draw or trace an image onto paper, and then transfer it onto soft rubber using carbon paper. Then you use a carving tool to remove negative space—basically any part of the image that would not be printed. Finally, you apply some ink to the stamp and press firmly onto a paper surface to create a stamped image."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Stenciling",
        duration: 27,
        speaker: "Sarah LaRue",
        audioURL: "3_Stenciling_SarahLaRue",
        transcript:
          "<i>Sarah LaRue:</i>\n\nA stencil can allow you to create the same shape over and over. Warhol used it specifically to create blocks of color in a certain shape. He also sometimes used it to reproduce text, more dependably than with stamps.\n\nTo make a stencil you take a thin sheet of material such as paper, plastic, or even metal and cut a design through it. And then you apply paint through these cut spaces onto your surface."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "<i>Two Heads</i>",
        duration: 37,
        speaker: "Sarah LaRue",
        audioURL: "4_TwoHeads_SarahLaRue",
        transcript:
          "<i>Sarah LaRue:</i>\n\nIn <i>Two Heads</i> from 1957, Warhol used a stencil with spray paint in combination with the blotted line technique. The stencil is symmetrical and it has a lot of geometric shapes that are arranged across the page. The edges of each shape is a little bit blurry, probably from that use of spray paint.\n\nAt the bottom of the composition there are two heads that were created with the blotted line technique, and they are of two men who are very close together. They look like they're almost about two embrace. The stenciled pattern in the background almost looks like it could be rays of energy or the thoughts of these two men radiating out from their heads."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 9,
    shortTitle: "Female Fashion Figure",
    longTitle: "Tactile reproduction: <i>Female Fashion Figure</i>",
    shortCredit: "Tactile reproduction: <i>Female Fashion Figure</i>",
    longCredit: "Tactile reproduction: <i>Female Fashion Figure</i>",
    regions: ["tactiles"],
    imageURL: "Tactile-Female_Fashion_Figure.png",
    imageWidth: 475,
    imageHeight: 414,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 241,
        speaker: "Narrator",
        audioURL: "TactileFemaleFashionFigure_Tactile",
        transcript:
          "<i>Narrator:</i>\n\nThis line drawing with synthetic dye features a fashionable, lithe woman in a puffy, knee-length dress standing in front of a 1950s’ convertible sports car. \n\nCentered near the bottom of the piece you will find the woman’s feet, tucked into pointy high-heeled shoes. If you follow the woman’s legs up toward the knees you will soon come to the hem of her dress. Using both hands, explore the edges of her skirt, which is shaped like a soft triangle, and comes back toward the center at her narrow waist. Continuing up the dress you will find a V-shaped neckline, and thin straps that lead to her sloping shoulders. A delicate string of pearls hangs around the woman’s neck, which she is touching with the tips of her slender fingers. \n\nAbove the woman’s shoulders you’ll find her long, thin neck. She is depicted in profile, facing our right, so by following the line of her neck on the right hand side you will soon come to her chin, then her lips, and her delicate, pointy nose. The line leads up to a puff of coiffed hair, which juts out over her forehead. Her up-do curves back along the contours of her head, and ends at the nape of her bare neck. \n\nNow that you have fully mapped out the edges of this work’s central subject, perhaps take some time to explore her dress more fully. Discover the rosette on the bodice, in the center of her chest, the small pleats near the waist, and the garment’s smooth, soft texture, used to evoke the watery, violet color found in the original piece. \n\nBehind the woman is a 1959 Plymouth Sport Fury Convertible sports car, which faces the upper right-hand corner of the piece. If you start, once again, at the woman’s feet, follow her legs, and then the left-hand edge of the skirt, you will soon discover the car’s rear bumper, which stretches out toward the left-hand edge of the work. The back of the car features thin, elongated tail lights, a bumper with chrome details, and a blank, rectangular license plate. At the far left, above the taillight, you will find a decorative fin, which delineates the rear corner of the car. Near the center of the trunk, directly above the license plate, are concentric circles representing the spare tire case mounted on the rear. \n\nTo explore the front of the car, begin once again at the woman’s feet. Follow her legs up to the hem, then follow the hemline to the right, and along the side of her skirt. Here you will find the side of the car, which begins at the rear wheel well and continues up toward the right-hand corner. The side of the car also features two parallel racing stripes that cross the door on the way to the rounded nose. Directly below the nose is the front tire, and above it, to the left, is a small round side mirror. Continuing toward the left you will find the outline of the windshield, as well as the top half of the steering wheel and the low rearview mirror, which is mounted above the dashboard inside the car. \n\nNote that the body of the car has the same smooth texture as found in the dress. In the original piece, the artist painted both objects with Dr. Martin’s watercolors: violet for the dress, and cherry red for the sports car. \n\nOne last thing—near the bottom right hand corner you will find a single dot in an otherwise blank area of the piece. This represents a tiny black mark from the artist’s pen, which may, or may not, have been an intentional addition to the original work."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 71,
        speaker: "Narrator",
        audioURL: "TactileFemaleFashionFigure_Visual",
        transcript:
          "<i>Narrator:</i>\n\nThis black ink line drawing with synthetic dye features a fashionable, lithe woman in a puffy, knee-length dress standing in front of a 1950s convertible sports car.\n\nRendered in irregular black ink lines, the woman stands at the center of the piece, facing our right, with one hand reaching up to touch the string of pearls around her neck. She wears her hair coiffed and up, with pointed heels on her feet, and an oval rosette in the bodice of her sleeveless dress.\n\nBehind her is a 1959 Plymouth Sport Fury convertible, which faces our upper right hand corner as if preparing to drive away from us. The long, sleek car has rear fins and a round spare tire case mounted on the trunk. The front of the car has a freestanding windshield, a round side mirror, and an open interior.\n\nWhile the background and the woman lack color, both the car and the dress have been painted with vibrant, watery dye: violet for the dress, and cherry red for the sports car."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 10,
    shortTitle: "Reclining Male Torso",
    longTitle: "Tactile reproduction: <i>Reclining Male Torso</i>",
    shortCredit: "Tactile reproduction: <i>Reclining Male Torso</i>",
    longCredit: "Tactile reproduction: <i>Reclining Male Torso</i>",
    imageURL: "Tactile-Reclining_Male_Torso.png",
    imageWidth: 408,
    imageHeight: 475,
    regions: ["tactiles"],
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 201,
        speaker: "Narrator",
        audioURL: "TactileRecliningMaleTorso_Tactile",
        transcript:
          "<i>Narrator:</i>\n\nThis stylized line drawing features a bare-chested young man, lounging on a formal sofa, facing us. \n\nAt the bottom right-hand corner, you will find a patch of wavy, parallel lines representing part of the pillow. If you continue up from there, close to the edge of the piece, you will soon find the man’s pointy elbow. Keeping your right hand on that spot, slowly drag your other hand straight across to the left. You will pass several small patches of loose, parallel lines that represent hairs before coming to the other side of the man’s forearm. \n\nNow that you have located both edges, explore the length of the man’s long, draping arm. Lower down you will find the forearm curving at the wrist, and fingers that hang beyond the bottom edge of the piece. \n\nMoving back up the limb, your left hand will follow the straight edge of the forearm to the crook of the young man’s elbow. Here a line branches off toward the top of the piece, outlining the gentle curve of his bicep. The inner arm ends at the man’s armpit, represented by a narrow, tilting V. \n\nOn the right your fingers will find the widening forearm, the pointy elbow, the bulging tricep, and the strong shoulder joint. The line then brings you around to left where you can trace the man’s broad shoulder. You’ll likely notice a patch of fine parallel marks, like ribbing, just above this line. This is part of the pattern found on the back of the sofa. Continuing along the shoulder you will come to the side of the young man’s neck. Here, in the upper left-hand corner of the piece, is the young man’s face. \n\nHe looks at us with large eyes, pouting lips, and a few tufts of wavy hair. Remember, this rendering is stylized, so the man’s features might not be easily recognizable. To orient yourself, try finding the man’s ear by moving up the line of his neck, on the right. From there you can trace his jawline, down around the chin, past the full lips, to the sharp cheekbone. \n\nDirectly below the man’s head is a large, roughly square pillow, the edges of which outline the largest blank space in the piece. Below the pillow, near the lower left hand corner, you will find irregular shapes and textures representing the patterned sofa. More irregular patches of decoration can be found on the back of the sofa above the man’s shoulder, and in the upper right-hand corner. \n\nIn the center of the piece is the outline of the young man’s chest. To locate it, first find the patch of ribbing above the man’s shoulder. Moving straight down from there you will cross the shoulder line, and eventually come to a feathery, upside-down Y. This is the outline of the man’s inner pectoral muscles. To the right you will find his nipple, which is represented by an oval with a curving hood, like an eyelid. The nipple on the left is not depicted, as it is covered by the large square pillow."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 65,
        speaker: "Narrator",
        audioURL: "TactileRecliningMaleTorso_Visual",
        transcript:
          "<i>Narrator:</i>\n\nThis stylized line drawing on yellowed manila paper features a bare-chested young man lounging on a formal sofa. Rendered with simple lines from a ballpoint pen, the muscular young man lies on his side, facing us, his head resting on his bicep at our upper left-hand corner. With his body propped up by a large, unadorned pillow, he stares at us with wide eyes and full, pouting lips. He has a broad shoulder and a long muscular arm, which is draped across his body and rests on a second pillow near the bottom righthand corner. Behind and beneath the young man, the patterned upholstery is represented by seemingly random shapes and patches of densely packed parallel lines. Other patches of texture include tufts of wavy hair on the young man’s head and forearm, and fine feathery lines that delineate the man’s pectoral muscles at the center of the drawing."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 11,
    shortTitle: "Coca-Cola [2]",
    longTitle: "Tactile reproduction: <i>Coca-Cola [2]</i>",
    shortCredit: "Tactile reproduction: <i>Coca-Cola [2]</i>",
    longCredit: "Tactile reproduction: <i>Coca-Cola [2]</i>",
    regions: ["tactiles"],
    imageURL: "Tactile-Coca-Cola.png",
    imageWidth: 475,
    imageHeight: 372,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 132,
        speaker: "Narrator",
        audioURL: "TactileCocaCola_Tactile",
        transcript:
          "<i>Narrator:</i>\n\nThis piece features a large bottle of Coca-Cola in an abstract setting, originally rendered in black crayon and black paint. \n\nThe glass bottle stands alone on the left. Starting near the bottom, you can follow its curves up toward the narrow mouth near the upper left hand corner of the piece. The brand’s cursive logo is located halfway up the bottle, and a patch with the texture of polished concrete can be found at the top. We’ll return to that patch in a moment. To the left of the bottle, covering the edge of the piece, are patches of rough lines, which represent the crayon markings found in the original work. \n\nCovering the right-hand side of the piece, parallel to the bottle, is a large, thick column with a slightly flared base. Most of this column is filled in with the same patchy crayon markings found on the left edge, and therefore shares the same rough texture. Near the top, however, is a large smooth patch, representing the dark black paint used by artist Andy Warhol. \n\nCentered at the top of the piece are the first three letters of the Coca-Cola logo: C O C. The first C has a long curving tail that underlines the other letters, and the cursive O is connected to the second C by a swooping line near the top. The rest of the logo is blocked on the right by the large column. \n\nOn the left, covering the top of the bottle and much of the corner, is the textured patch that feels like polished concrete. This texture is unique in the piece representing neither the crayon, nor the thick black paint. It represents a cloudy gray smudge, perhaps made with a dry brush or rag. \n\nFinally, a few unusual markings can be found near the bottom of the piece. Between the flared bases of the bottle and the column are three symbols in a neat row, which resemble the letters Q, n, and L."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 77,
        speaker: "Narrator",
        audioURL: "CocaCola_Tactile_Visual",
        transcript:
          "<i>Narrator:</i>\n\nThis canvas, which measures almost six feet tall and over four feet wide, features a glass bottle of Coca-Cola, rendered in black casein paint and crayon. \n\nThe large, detailed bottle stands on our left, rising up from the bottom of the canvas. Covering the right-hand edge of the painting is a thick black column with a slightly flared base. Most of the column is filled in with patches of light-black crayon markings, but the top features a more solid patch of heavy black paint. \n\nAt the top of the canvas are the first three letters of the Coca-Cola logo, with the rest obscured by the column. More light-black crayon markings appear at the left edge of the canvas, and a smudge of dry black paint marks the upper left hand corner, clouding the top of the glass bottle. \n\nCentered near the bottom of the canvas, between the flared bottoms of the column and the bottle, are several small symbols. One is a circle with a small vertical line protruding from the bottom, the second is a backwards lowercase N, and the third is a thick vertical line with an imprecise mark at the lower right."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 12,
    shortTitle: "Hand-painted pop",
    longTitle: "Hand-painted pop: Coca-Cola",
    shortCredit: "Andy Warhol, <i>Coca-Cola [2]</i>, 1961 © AWF",
    longCredit:
      "Andy Warhol (American, 1928-1987) \n<i>Coca-Cola [2]</i>, 1961 \ncasein and crayon on linen \n69 1/2 x 52 1/4 in. (176.5 x 132.7 cm.) \nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution Dia Center for the Arts \n© The Andy Warhol Foundation for the Visual Arts, Inc. \n1997.1.20",
    imageURL: "cocaCola.png",
    imageWidth: 352,
    imageHeight: 475,
    regions: ["green"],
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 22,
        speaker: "Grace Marston",
        audioURL: "Marsden_Grace_Coca-Cola_Introduction",
        transcript:
          "<i>Grace Marston:</i>\n\nHi. My name is Grace Marston. I am an educator and a gallery attendant at The Andy Warhol Museum. \n\nIn the early 1960s Andy Warhol was doing a great deal of hand-painted work where he was copying commercial products, images from magazines and advertisements, and Coca-Cola was really kind of one of the biggest, most popular brands represented in this time period."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 77,
        speaker: "Narrator",
        audioURL: "CocaCola_Visual",
        transcript:
          "<i>Narrator:</i>\n\nThis canvas, which measures almost six feet tall and over four feet wide, features a glass bottle of Coca-Cola, rendered in black casein paint and crayon. \n\nThe large, detailed bottle stands on our left, rising up from the bottom of the canvas. Covering the right-hand edge of the painting is a thick black column with a slightly flared base. Most of the column is filled in with patches of light-black crayon markings, but the top features a more solid patch of heavy black paint. \n\nAt the top of the canvas are the first three letters of the Coca-Cola logo, with the rest obscured by the column. More light-black crayon markings appear at the left edge of the canvas, and a smudge of dry black paint marks the upper left hand corner, clouding the top of the glass bottle. \n\nCentered near the bottom of the canvas, between the flared bottoms of the column and the bottle, are several small symbols. One is a circle with a small vertical line protruding from the bottom, the second is a backwards lowercase N, and the third is a thick vertical line with an imprecise mark at the lower right."
      },
      {
        uuid: uuid.v4(),
        category: "HISTORICAL_CONTEXT",
        depth: 0,
        title: "Mass appeal",
        duration: 33,
        speaker: "Grace Marston",
        audioURL: "Marsden_Grace_Coca-Cola_Mass-Appeal",
        transcript:
          "<i>Grace Marston:</i>\n\nWarhol chose the Coca-Cola bottle as a subject matter for many artworks because he was really interested in the popularity of the brand and the accessibility of the product. \n\nHe talked about how Coke, you know, is the same no matter who's buying it. You can't pay any more money to get a better bottle of Coca-Cola, so whether you're Elizabeth Taylor or the president or just the bum around the corner, you're gonna get the same soda in your Coca-Cola bottle. And so he appreciated that that kind of democratized the product and that it had such a mass appeal."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Expressionist elements",
        duration: 35,
        speaker: "Grace Marston",
        audioURL: "Marsden_Grace_Coca-Cola_Expressionist_elements",
        transcript:
          "<i>Grace Marston:</i>\n\nWhat's unique about this particular Coke bottle painting is it has all these expressionist elements that you don't see in many of the other Coke bottle works, which are much more straightforward. \n\nOn this canvas we see a lot of smudges, a lot of scribbles. We see that Andy used both crayon and casein on the painting. We see that he included these black bars on either side of the Coke bottle that are sort of incomplete, that weren't actually in his source image, the advertisement that he based it on. It's much messier than a lot of the other Coke bottle paintings that we see."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: '"This is hand-painted pop"',
        duration: 48,
        speaker: "Jose Diaz",
        audioURL: "Diaz_Jose-Coke-Hand_Painted_Pop",
        transcript:
          "<i>Chief curator Jose Diaz:</i>\n\nHello, my name is Jose Diaz. I am the chief curator at The Andy Warhol Museum.\n\nAt the time, in the early '60s, abstract expressionism was the most popular artistic movement in America. It was an American movement, mostly led by an artist named Jackson Pollock. The concept was that the works were expressed through action and emotion.\n\nSo in these earlier works, we see that the paintings that Warhol made are very painterly. You can see drips of paint. If you were to run your hand down the Coke bottle, you find that the line is broken, that there's different mediums on the canvas.\n\nWhat's interesting is that Andy really can't find what type of artist he wants to be. A lot of the works here have heavy paint drips. You can find the memory of the brush stroke or the crayon running across the canvas. This is hand-painted pop."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 13,
    shortTitle: "Pop products",
    longTitle: "Pop products: Campbell's soup",
    shortCredit:
      "Andy Warhol (American, 1928-1987), <i>Big Torn Campbell's Soup Can (Pepper Pot)</i>, 1962 © AWF",
    longCredit:
      "Andy Warhol (American, 1928-1987)\n<i>Big Torn Campbell's Soup Can (Pepper Pot)</i>, 1962\ncasein and graphite on canvas\n71 5/8 x 52 in. (181.9 x 132.1 cm.)\nThe Andy Warhol Museum, Pittsburgh; Founding Collection, Contribution The Andy Warhol Foundation for the Visual Arts, Inc.\n© The Andy Warhol Foundation for the Visual Arts, Inc.\n1998.1.31",
    regions: ["green"],
    imageURL: "1998-1-31_pub_01-Web_Ready_(475px_longest_edge)_-_Check_Copyright_Before_Using_on_Web.jpg",
    imageWidth: 340,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 16,
        speaker: "Grace Marston",
        audioURL: "Marsden_Grace_Campbells_Introduction",
        transcript:
          "<i>Grace Marston:</i>\n\nHi. My name is Grace Marston. I am an educator and a gallery attendant at The Andy Warhol Museum. \n\nThis is a big torn pepper pot Campbell's soup can from 1962. What is unique about this soup can is that the label is torn."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 73,
        speaker: "Narrator",
        audioURL: "Campbells_Visual",
        transcript:
          "<i>Narrator:</i>\n\nThis six foot tall, four-and-a-third foot wide canvas features a single can of Campbell’s soup with a ripped and peeling label.\n\nThe large black and gray can stands just to our right of center, rendered in graphite and thin, casein paint. The full-color label peels off to our left, torn down the middle of the company’s name and logo. The ripped label hangs loose, still connected on the unseen back of the can.\n\nSeveral tears in the paper obscure the label’s design, which features a red upper half with white calligraphy script, a white bottom half with red block script, and a round golden crest in the middle, bridging the two halves. Other label elements include a small patent notice in white near the upper left, illegible cooking instructions curving around the left edge, and a row of golden fleurs-de-lis at the bottom. The partial product name on the label is marred by several tears, but the letters P-E-P suggest that the advertised variety might be Pepper Pot soup."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Torn, crumpled, crushed",
        duration: 39,
        speaker: "Grace Marston",
        audioURL: "Marsden_Grace_Campbells_Torn",
        transcript:
          "<i>Grace Marston:</i>\n\nThe majority of Andy Warhol's paintings of the Campbell's soup cans are very straightforward. There's no shadows, no backgrounds, no alterations to the label. Most of Andy's soup can paintings look exactly the way the soup can looks on the grocery store shelf. \n\nBut there are a few examples of these altered soup cans. There are about six paintings that have torn or crumpled labels. He also painted crushed soup cans and stacked soup cans and things like that. And so that shows Warhol paying a little bit more attention to the can itself rather than just the greater idea of Campbell's as a product."
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: "Photos and opaque projectors",
        duration: 38,
        speaker: "Jessica Beck",
        audioURL: "3_Photos and opaque projectors_Jessica Beck",
        transcript:
          "<i>Jessica Beck:</i>\n\nHi, I'm Jessica Beck.\n\nAt this moment Warhol often used photographs as source material for his paintings. He used an image taken by Edward Wallowitch: a young photographer, a close friend and an intimate lover.\n\nAnd he used the photograph on top of an opaque projector. He would project onto the blank canvas and trace the shadow of the image with pencil. He would then go in with paint and hand paint in the Campbell's image using tape to get a clean line and a clean edge around each individual brush stroke."
      },
      {
        uuid: uuid.v4(),
        category: "ARCHIVAL_MATERIAL",
        depth: 0,
        title: '"It\'s the latest thing"',
        duration: 60,
        speaker: "Grace Marston",
        audioURL: "Singelis_Campbells",
        transcript:
          "<i>Jessica Beck:</i>\n\nWarhol's friend, Leila Davies Singelis, describes learning about Warhol's early Campbell soup can paintings. \n\n<i>Leila Davies Singelis</i>: \nI went to New York in '61. I didn't see Andy because he couldn't come. They were at a big party. He couldn't come, but I talked to him on the phone. And I asked him what he was doing, and he said, \"Oh, you wouldn't believe this. I’m doing soup cans.\" And I said, \"Andy\"—the little mother coming out of me—\"Andy.\" \"Oh, it's the latest thing. It's the latest thing,\" and on and on he went, you know, about this is the latest thing. He'd just take something very ordinary. This is—you know, it's going to be the “in thing” and was just gonna take off like a rocket."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 7,
    order: 14,
    shortTitle: "Do It Yourself",
    longTitle: "<i>Do It Yourself (Sailboat)</i>",
    shortCredit: "Andy Warhol, <i>Do It Yourself (Sailboat)</i>, 1962 © AWF",
    longCredit:
      "Andy Warhol, <i>Do It Yourself (Sailboat)</i>, 1962\nThe Andy Warhol Museum, Pittsburgh; Museum Purchase, Contribution The Andy Warhol Foundation for the Visual Arts, Inc., and Dia Center for the Arts, by exchange\n© The Andy Warhol Foundation for the Visual Arts, Inc.\n2016.4",
    regions: ["green"],
    imageURL: "doItYourself.png",
    imageWidth: 475,
    imageHeight: 344,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 32,
        speaker: "Jessica Beck",
        audioURL: "1_Introduction_Jessica Beck",
        transcript:
          "<i>Curator Jessica Beck:</i>\n\nHello! My name is Jessica Beck. I’m the Milton Fine Curator of Art here at The Andy Warhol Museum.\n\nThis painting, <i>Do It Yourself (Sailboat)</i>, Warhol created in 1962. It’s a fairly large canvas. It’s an image from a paint by numbers set, a do-it-yourself paint by numbers set of a sailboat.\n\nWarhol didn’t like the painting process. He found some of it tedious. Instead of painting every individual number on this canvas, he actually applied Letraset numbers."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 65,
        speaker: "Narrator",
        audioURL: "VisualDescription_DoItYourselfSailboats",
        transcript:
          "<i>Narrator:</i>\n\nThis seemingly half-finished paint-by-numbers image of two sailboats at sea on a cloudy day is actually an original acrylic and graphite painting from Warhol’s <i>Do It Yourself</i> series.\n\nThe saturated sky has been filled in with dark blue, and some layers of the puffy clouds are rendered in light pink, rose, and lavender.\n\nBut much of the painting consists of shapes thinly-outlined with pencil, each containing a perfect type-set number that corresponds to an unknown color key. In the clouds are rolling layers of 1, 7, 14, 17, 18, and 22, while the sea comprises dozens of small, almond-shaped waves to be painted 7, 8, 9, and 17.\n\nSome color details can be found on the boat in the foreground, including teal green marks along the edge of the main sail and a black and brown mast topped by a small orange flag, but most sections are still waiting to be painted."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "Irony and wit",
        duration: 52,
        speaker: "Jessica Beck",
        audioURL: "2_Irony and wit_Jessica Beck",
        transcript:
          "<i>Curator Jessica Beck:</i>\n\nThinking of the context of pop art, which would have valued this idea of wit or irony or a sense of humor, there is a bit of that involved in this canvas because Warhol is working at a moment when abstract expressionism, which was all about introspective psyche and would have been very emotional in some way.\n\nNow pop art is supposed to be sort of ironic and working with images from the commercial field, lower, some could say mundane images.\n\nFor him to do a paint-by-numbers set is this idea that art could somehow be predetermined. There’s a sense of irony in these definitions of highs and lows and so he’s bringing this very low image of an at home paint by numbers set that any average person could use and bringing it to the canvas and elevating it."
      },
      {
        uuid: uuid.v4(),
        category: "COMMENTARY_ANECDOTE",
        depth: 0,
        title: "A vital acquisition",
        duration: 39,
        speaker: "Patrick Moore",
        audioURL: "3_A vital acquisition_Patrick Moore",
        transcript:
          "<i>Director Patrick Moore:</i>\n\nI’m Patrick Moore. I’m the Director of the Warhol.\n\nWe acquired <i>Do It Yourself (Sailboat)</i> in 2016 through an exchange and it was a vital acquisition for us because it really filled one of the very rare gaps in our very comprehensive collection.\n\nThese works in particular show a different side to Warhol even though they were made during his most famous period. You’ll see that the color palette is different than most of the work from that period. And also they demonstrate a kind of democratic ideal of anyone being able to make a great painting."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Source material and Letrasets",
        duration: 59,
        speaker: "Erin Byrne",
        audioURL: "4_Source material_Erin Byrne",
        transcript:
          "<i>Archivist Erin Byrne:</i>\n\nHi, I’m Erin Byrne.\n\nIn a vitrine on the other side of the room, you’ll see source material for Warhol’s <i>Do It Yourself</i> series.\n\nThese paintings involved Letrasets which were developed in 1959 and they were marketed towards commercial artists and designers. They came in a wide range of styles and fonts and sizes.\n\nThe Letrasets that are in this vitrine are the dry rub process which the user would just able to place the letters or the symbols on whatever mockup they were using in their artwork. And then they would just simply rub the actual letter off of the Letraset onto the artwork.\n\nThe idea behind Letrasets was it allowed amateurs to create professional and refined artworks. Warhol, being a commercial artist at the time, would have been aware of Letrasets and, like many things in his artwork, you can see him incorporating new and emerging technologies into his works."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 3,
    order: 0,
    shortTitle: "Archives",
    longTitle: "Archives Study Center",
    shortCredit: "Archives Study Center, photo by Dean Kaufman",
    longCredit:
      "Archives Study Center\nThe Andy Warhol Museum, Pittsburgh\nPhoto by Dean Kaufman",
    regions: ["lime"],
    imageURL: "archives.png",
    imageWidth: 475,
    imageHeight: 316,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 45,
        speaker: "Erin Byrne",
        audioURL: "Introduction_Erin Byrne",
        transcript:
          "<i>Archivist Erin Byrne:</i>\n\nHi, I’m Erin Byrne.\n\nThe archives at the Andy Warhol Museum are a collection of objects that Warhol had amassed throughout his life.\n\nWarhol was an inveterate collector. He was constantly searching to capture all types of memories and instances that happened throughout his life. In addition to that we also have personal items related to Andy Warhol, his mother and a lot of his associates.\n\nSo our collection holds photographs, tear sheets, magazines, books, Warhol’s entire album collection, source material, a lot of his artistic materials—paint brushes, paints, stencils, stamps. We basically have everything that forms the visual of Andy Warhol."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 4,
    order: 0,
    shortTitle: "Camouflage",
    longTitle: "Tactile reproduction: <i>Camouflage</i>",
    shortCredit: "Tactile reproduction: <i>Camouflage</i>",
    longCredit: "Tactile reproduction: <i>Camouflage</i>",
    regions: ["white"],
    imageURL: "Tactile_Camouflage.png",
    imageWidth: 475,
    imageHeight: 465,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 64,
        speaker: "Narrator",
        audioURL: "Tactile_Camouflage",
        transcript:
          "<i>Narrator:</i>\n\nMilitary or hunting camouflage patterns are designed with different palettes for use in different situations. To hide in a tropical forest, one might use a random pattern of irregular splotches in multiple shades of green. In a woodland setting, the palette might include patches of brown, black, green and pale yellow. Desert camouflage patterns use brown and tan blobs, while white and grey are best for winter and urban camouflage. Andy Warhol’s Camouflage, however, consists of red, gold, and rose patches on a hot pink background.\n\nExplore the piece’s color shapes, which resemble overlapping islands with many coves and inlets. In this model, the four colors are represented by different tactile heights; the lighter the color, the higher it’s raised. Red is the lowest, followed by hot pink, then gold. The pale rose blotches occupy the highest level in the reproduction."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 65,
        speaker: "Narrator",
        audioURL: "Visual_Camouflage",
        transcript:
          "<i>Narrator:</i>\n\nMilitary or hunting camouflage patterns are designed with different palettes for use in different situations. To hide in a tropical forest, one might use a random pattern of irregular splotches in shades of green. In a woodland setting, the palette might include patches of brown, black, green and pale yellow. Desert camouflage patterns use brown and tan blobs, while white and grey are best for winter and urban camouflage.\n\nWarhol is reported to have asked his studio assistants, “What can I do that would be abstract but not really abstract?” Camouflage gave him the opportunity to work with both an abstract pattern and an immediately recognizable image. Unlike military motifs, Warhol’s camouflage paintings reflect bright synthetic and inorganic colors—fire-engine red, golden yellow, pale rose, and hot pink— which would not provide a veil or disguise in any landscape."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 4,
    order: 1,
    shortTitle: "Mao Wallpaper",
    longTitle: "Tactile reproduction: <i>Mao Wallpaper</i>",
    shortCredit: "Tactile reproduction: <i>Mao Wallpaper</i>",
    longCredit: "Tactile reproduction: <i>Mao Wallpaper</i>",
    regions: ["white"],
    imageURL: "Tactile_MaoWallpaper.png",
    imageWidth: 475,
    imageHeight: 474,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 284,
        speaker: "Narrator",
        audioURL: "Tactile_MaoWallpaper",
        transcript:
          "<i>Narrator:</i>\n\nThis detail from a large roll of wallpaper features identical portraits of Chairman Mao Zedong, presented in offset rows. In the repeated portrait, which is based on a pencil sketch rendered with quick black lines and squiggly shading, the Chairman faces us, gazing past our left ear.\n\nThe tactile piece in front of you features two full and six partial portraits. As they are all identical, we’re going to fully explore just one. Starting at our lower left-hand corner, work your hand along the bottom edge of the piece, past the initial cluster of lines, until you come to a considerable blank spot. About one third of the way along the edge, just a few inches up from the bottom, you will find the outline of an imperfect circle featuring a small dot in the middle. This is the button of Mao’s famous jacket, nestled in the center of his closed collar. To confirm that you’ve reached our entry point, check for the tight squiggly line to the left of the button. This is the shading under the collar. Now, follow the shading up toward the right and locate the point where the two sides of the collar meet in the middle.\n\nMoving higher, toward Mao’s face, you’ll come to some wavy lines that suggest the Chairman is sporting a goatee. In fact, this is just shading on his neck and plump double chin. As you continue up the face you will find the shadow under the right side of the implied lower lip, and then the horizontal line of the thin upper lip. From the right-hand corner of the mouth, trace the squiggly line up toward the left to the subject’s nostril. This line doesn’t appear to be shading or a facial feature; it’s just a little squiggle!\n\nYour fingertips will find both nostrils, but not the line of the subject’s broad nose. You can, however, trace the broken shadow on the right side of the nose up toward the eye on our right. Both eyes are loosely rendered and topped with thin lines representing the brows. Move your hand up the smooth, high forehead until you reach the subject’s arching hairline. Using one hand or two, explore Mao’s distinctive hairstyle, which features a thin band across the top and puffs of hair at either temple, resembling earmuffs worn above the ears.\n\nTracing the outer line of the hair, move your hand to the right as it curves down the side of the head, all the way to the top of subject’s well-defined ear. Moving your fingertips to the left onto the side of the face you’ll find squiggly shading where a sideburn might be. Now, shift your fingertips to the right, past the ear and off the face. Here, you’ll discover a long looping line, and above it a tight zigzag reminiscent of a coiled telephone cord. These same doodles can be found beside each individual portrait.\n\nNow, retrace your hand movements and locate the subject again. You might be able to detect the tactile height difference between Mao’s face and the background space between portraits. This hints at the only color found in the original wallpaper, which otherwise features black lines on a white background. In each portrait, the face is under-painted with a solid purple oval, giving Mao Zedong a decidedly plum-like appearance.\n\nLet’s take a moment to locate the other portraits in this reproduction. Beginning with your hand on the portrait we have just explored, move toward the upper right-hand corner of the piece. After passing the line that zigzags like a telephone cord, you will come to the second complete portrait. From here, continue toward the upper right where you will find the mouth, chin and half of the collar from the first partial portrait. We can easily locate the rest of the partial portraits by moving clockwise around the edge of the piece. On the lower right-hand side is half of the Chairman’s face, then on the bottom near the right is the top half of his face. Pass under the full portrait we first explored and in the lower left-hand corner you’ll find the Chairman’s ear and one puff of his hair. Moving up the left-hand edge, you’ll find one side of a portrait; and at the top of the piece, directly above the first full portrait, you will find the bottom half of the sixth and final partial portrait."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 67,
        speaker: "Narrator",
        audioURL: "Visual_MaoWallpaper",
        transcript:
          "<i>Narrator:</i>\n\nThis detail from a fifteen-foot long roll of white wallpaper features twenty-one identical portraits of Chairman Mao Zedong, presented in offset rows. The repeated portrait is based on a pencil sketch rendered with quick black lines and squiggly shading.\n\nIn each portrait, the Chairman faces us at a slight angle, gazing past our left ear with the collar of his famous jacket buttoned tight under his plump, shaded chin. He has a high, round forehead and a distinctive hairstyle that features a puff of hair at either temple, bridged by a thin band across the top of his head. From this angle, his hair resembles earmuffs worn above the ears.\n\nTo the right of each portrait is a series of loose squiggles including a line that juts off the collar, and a tight zigzag reminiscent of a coiled telephone cord. The face of each portrait is under-painted with a solid purple oval, giving Mao Zedong a decidedly plum-like appearance."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 4,
    order: 2,
    shortTitle: "Self-Portrait",
    longTitle: "Tactile reproduction: <i>Self-Portrait</i>",
    shortCredit: "Tactile reproduction: <i>Self-Portrait</i>",
    longCredit: "Tactile reproduction: <i>Self-Portrait</i>",
    regions: ["white"],
    imageURL: "Tactile_SelfPortrait.png",
    imageWidth: 395,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 170,
        speaker: "Narrator",
        audioURL: "Tactile_SelfPortrait",
        transcript:
          "<i>Narrator:</i>\n\nThis silkscreened self portrait depicts the electric blue head of Andy Warhol floating in a smooth, glossy black space. He faces us squarely wearing a spiky wig, with locks of hair shooting out in all directions like a wild crown or an exploding firework. Keep in mind that this tactile reproduction has been scaled down considerably - the original measures nine feet tall and nine feet wide!\n\nBegin by placing your hand in the center of the piece, which is to say atop Andy Warhol’s head. Sweeping your hand back and forth, explore the raised locks of hair, which stick up in all directions in smooth clumps, textured matted patches, and feathery individual strands. Moving toward the upper left you’ll find small raised flecks on the smooth background. These little dots, which fly from the wig like water shaken off a wet dog, are actually artifacts of the silkscreen process, as is the nubbin found on the upper edge of the piece, near the right-hand corner.\n\nOnce again, place your hand at the center of the piece atop Andy Warhol’s head. As you move your hand down toward his face you’ll find that the wig sits quite low on his forehead and ends at his brow line. As Warhol is lit from above, the shadow under his furrowed brow creates a distinct ridge that might feel a bit like a single connected eyebrow. Directly below the brow ridge you will find the subject’s classically-rendered eyes, each of which is punctuated with a tiny electric blue dot: the reflection of light on the pupil.\n\nLocate the bridge of the nose between the eyes where the brow seems to furrow. Using one hand or two, trace the recessed shadows that fall down both sides of the nose, and under the tip as well, creating a triangular moat. Continuing down the face, over the smooth blank space between the nose and upper lip, you will reach the subject’s recessed mouth. From here, move down over the lower lip to locate Warhol’s textured chin, which ends in a bowl-shaped ridge at the bottom edge of the piece.\n\nTo explore the shape of the subject’s face, press the tip of your finger against the pad of your thumb in a pinching gesture and place it on the base of the chin. Now slowly spread your finger and thumb, tracing both sides of the chin as it curves up into the jawline and begins to widen. Warhol’s hollow cheeks are filled with shadow, creating the illusion of a very narrow face, but the gap between your finger and thumb will widen considerably as you move up onto his high cheekbones."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 70,
        speaker: "Narrator",
        audioURL: "Visual_SelfPortrait",
        transcript:
          "<i>Narrator:</i>\n\nThis nine-foot tall by nine-foot wide photographic silkscreen self-portrait depicts the electric blue head of Andy Warhol floating in a glossy black space.\n\nHe faces us squarely wearing a spiky wig, with locks of hair shooting out in all directions like a wild crown or an exploding firework. Small flecks appear to fly from the wig like drops of water being shaken off a wet dog. The wig sits low on the subject’s forehead and ends at his dark eyebrows. Warhol’s eyes are open wide and appear pitch black, save for two tiny blue dots where light reflects off the pupils.\n\nFaint shadows fall down both sides of the nose, but no shadow is present between the nose and the upper lip, leaving a wide, smooth expanse. Warhol’s tight, dark lips span the width of his narrow jaw, as heavy shadows darken his hollow cheeks. Both of his ears are lost in the shadow of the wig, but tufts of hair jut out on either side of his high cheekbones."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 4,
    order: 3,
    shortTitle: "Skull",
    longTitle: "Tactile reproduction: <i>Skull</i>",
    shortCredit: "Tactile reproduction: <i>Skull</i>",
    longCredit: "Tactile reproduction: <i>Skull</i>",
    regions: ["white"],
    imageURL: "Tactile_Skull.png",
    imageWidth: 475,
    imageHeight: 437,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 302,
        speaker: "Narrator",
        audioURL: "Tactile_Skull",
        transcript:
          "<i>Narrator:</i>\n\nThis photographic silkscreen features a human skull sitting on a table. The grainy black silkscreen has been under-painted with four blocks of color that align imprecisely and create double lines. The pink skull sits on a mint green table backed by a tan colored wall. The piece is lit from our upper right, therefore a black shadow falls to the left of the skull, surrounded by a pool of powder blue.\n\nThe skull sits in the center of the canvas as if gazing over our left shoulder. Run your hand down the left edge of the piece until you locate the horizontal line of the tabletop. Now, follow that line to the right all the way to the skull. We’ll begin here and explore the outline of the cranium to get a sense of the skull’s size and orientation. Trace the curve of the skull – which, again, is sometimes doubled - up and around to the right. As the skull begins to curve back down you’ll pass another horizontal line; that’s the right side of the table top which has passed behind the back of the skull.  Continue tracing the outline of the skull as it curves down toward the left. Soon you will come to a jumble of textures and ridges where the jawbone meets the temporal bone. We’re going to explore that later. For now, retrace your hand movements back up and around the cranium and return to our starting point where the left half of the tabletop vanishes behind the skull.\n\nHere, the table line meets the edge of the skull just below the orbital ridge, sometimes called the eyebrow bone.  Move your fingertips to the right until you find some raised bumps on an otherwise smooth surface. We’re now inside the eye socket on our left. The smooth patch is a dark shadow, and the bumps are grainy silkscreen artifacts. Much of this side of the skull is hidden in shadow, so move your hand toward the right where the other eye socket is more clearly delineated. Here, you’ll find a smooth recessed shape that resembles a lens on a pair of sunglasses.\n\nContinue moving your hand to the right onto a patch that feels like polished concrete: this is the temporal hollow. If you’d like, keep one hand here and use your other hand to find your own temporal hollow for comparison. It’s the soft, tender spot on the side of your head.\n\nLet’s get back to our starting point by returning our hand to the left edge of the piece and following the horizontal table line to the skull. From here we’ll trace the doubled outline of the skull down past the bump of the cheekbone, all the way to the chin where the line turns sharply to the right. You’ll note that the chin has the same polished concrete texture as the shadow in the temporal hollow. Moving your fingertips straight up from the chin you will come to the lower set of teeth, which are lined up like kernels of corn. Let’s explore the mouth: the long upper incisors, the tight-packed bottom teeth, and the squat molars. Trace the gap between the rows of teeth from the edge of the skull on the left to the upward curve on the right. The shape of the lower jawbone creates a shadow that might be mistaken for a ragged smile.\n\nMoving your hand to the right of the mouth you’ll come to the jumble of textures and ridges we located earlier. Explore this complicated area. It’s the spot there the jawbone connects to the side of the skull. In the original silkscreen, it’s also the spot where the green tabletop overlaps with the pink skull, a dark silkscreened shadow, and a swatch of powder blue. This creates a mountain range of textures, lines and tactile levels.\n\nOnce again, return to the starting point by running your hand down the left edge of the piece and locating the horizontal table line. Begin to move to the right, but stop before you reach the skull. Instead, move your hand straight down and explore the left side of the model. Here you’ll find the skull’s silkscreened shadow which falls in a large pool of powder blue acrylic paint; the powder blue is somewhat raised and the shadow is recessed within it. While most of the color patches in this piece follow the general line of the objects they are under-painting, this pool is larger and has its own distinct shape. Using your fingertips, explore the outline of the recessed shadow. Featuring a large gentle curve on the top (the shadow of the cranium) and a series of small bumps at the bottom (the shadow of the teeth and jaw), it strongly resembles the silhouette of a baby’s head in profile."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 73,
        speaker: "Narrator",
        audioURL: "Visual_Skull",
        transcript:
          "<i>Narrator:</i>\n\nThis six-foot tall, six-and-a-half-foot wide photographic silkscreen features a human skull sitting on a table as if gazing off over our left shoulder.\n\nThe grainy black silkscreen has been under-painted in acrylic with blocks of imprecisely aligned color, creating overlapping edges. The pink skull sits on a mint green table backed by a tan-colored wall. The hollow eye sockets and nasal aperture are blackened by shadows, as is the gap between the two rows of exposed teeth. The shape of this gap and the curve of the jawbone creates the impression that the skull is actually smiling.\n\nFalling to the left, the skull’s silkscreened shadow is under-painted by a large pool of powder blue acrylic paint. While most of the color patches in this piece follow the general line of the objects they are highlighting, this pool is significantly larger and has its own boxy shape. With its large forehead, pointy nasal bone, and small chin, the skull’s shadow strongly resembles a baby’s head in profile."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 5,
    order: 0,
    shortTitle: "Julia Warhola",
    longTitle: "Tactile reproduction: <i>Julia Warhola</i>",
    shortCredit: "Tactile reproduction: <i>Julia Warhola</i>",
    longCredit: "Tactile reproduction: <i>Julia Warhola</i>",
    regions: ["purple"],
    imageURL: "Tactile_JuliaWarhola.png",
    imageWidth: 475,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 210,
        speaker: "Narrator",
        audioURL: "Tactile_JuliaWarhola",
        transcript:
          "<i>Narrator:</i>\n\nThis silkscreened portrait features Andy Warhol’s mother, Julia Warhola, depicted from the chest up, looking directly at us. On top of the navy blue photographic silkscreen, the artist has smeared violet, blue and red acrylic paint with his own fingers, highlighting and obscuring the grainy image underneath - both visually and tactilely.\n\nBegin with your hands on the bottom edge of the piece just to the right of center. Here, you will find the wide point of the subject’s V-neck blouse. Using one hand or two, feel your way up the rough neckline to the shoulders, then move toward the center to locate the subject’s jaw and chin, which has the shape of a shallow bowl. To confirm you’ve found the chin, check for the sometimes-grainy recessed shadow on the subject’s neck located down and to the right.\n\nFrom the curve of the chin you can make your way straight up, past the subject’s slight chin dimple, to the horizontal line of her thin-lipped mouth. Moving your hand up from the center of the mouth, you will find the recessed shadow under her nose. A faint line at the right-hand side of this shadow will lead you up toward the left to a short horizontal line that crosses the bridge of the nose. This is the bridge of her glasses. Because the subject is lit from above, her wire-framed lenses are not well delineated. Using one hand or two, run your fingertips down along the sides of her nose, and you’ll feel the frames starting to curve onto her cheeks.\n\nRetrace your hand movements and return to the bridge of her glasses. To the left and right you’ll find Julia Warhola’s eyes, which are difficult to identify as they’re hidden in the shadow of her brow. Move your hand up from either shadow, over the line of her glasses. Here, you will find another recessed shape: one of her distinct thick eyebrows. Now, move your hand up the subject’s expansive forehead to the hairline, and explore her hair. Here, you’ll find streaks and smears and patches of spotty bumps, similar to the texture we examined earlier in the shadow under her chin.\n\nLet’s return to the bottom edge of the piece and explore the red blouse. Sweeping your hand back and forth across the bottom third of the model, you’ll find a smattering of random blue shapes and smeared paint. Continue exploring the entire piece, not to map the subject’s facial features, but to examine the textures and streaks of the aggressive finger painting. On the left side of the piece you’ll find zig-zagging smears and squiggles which represent dark purple and blue acrylic paint. On the relatively smooth right-hand side of the canvas are slight bumps, which represent flecks of gold peeking through the violet paint. Returning once again to our starting point at the base of the V-neck blouse, explore the wavy channel that zig-zags up to the left. By tracing this groove you are mimicking the exact action of Andy Warhol’s own finger."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 68,
        speaker: "Narrator",
        audioURL: "Visual_JuliaWarhola",
        transcript:
          "<i>Narrator:</i>\n\nThis three-foot by three-foot silkscreened portrait features Andy Warhol’s mother, Julia Warhola, depicted from the chest up, looking directly at us.\n\nOn top of the navy blue photographic silkscreen, the artist has smeared violet, blue, and red acrylic paint with his own fingers, both highlighting and obscuring the grainy image underneath. The subject has a round face, thinning hair, a broad nose, and a high forehead. She wears large glasses, a red V-neck sweater adorned with blue color-shapes, and a neutral expression on her thin lips.\n\nZig-zagging finger paint streaks much of the canvas, especially at our upper left, and across the painted sweater. To the left of her head are smears and squiggles of dark purple and blue acrylic paint. To our right, violet paint is flecked with golden undertones. A patch of pale violet paint covers one side of the subject’s face, which is painted with pink flesh-tones on our right."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 5,
    order: 1,
    shortTitle: "Mick Jagger",
    longTitle: "Tactile reproduction: <i>Mick Jagger</i>",
    shortCredit: "Tactile reproduction: <i>Mick Jagger</i>",
    longCredit: "Tactile reproduction: <i>Mick Jagger</i>",
    regions: ["purple"],
    imageURL: "Tactile_MickJagger.png",
    imageWidth: 475,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 268,
        speaker: "Narrator",
        audioURL: "Tactile_MickJagger",
        transcript:
          "<i>Narrator:</i>\n\nThis photographic silkscreened portrait features Mick Jagger against a cream-colored background, looking at us with a slight pout. His chest is facing the left side of the canvas such that we can only see one bare shoulder, but his head is turned to face us at a slight angle. The black silkscreened image has been under-painted with blocks of color that align imprecisely and create double lines.\n\nWe’ll begin by mapping the perimeter of Mick Jagger’s thick, shaggy hair, which falls like an upside-down U and frames both sides of his face and neck. Start with your hand at the top near the middle of the piece, and move it to the left until you find the ridge representing his hair’s outer edge. Follow this sometimes-feathered, sometimes-wavy line all the way down until it ends at the subject’s unseen shoulder near the bottom of the canvas. Around the perimeter of the hair, the brown under-paint extends beyond the black silkscreened image, creating the double lines mentioned earlier. Returning to the upper edge of the piece, move your hand from the center to the right and locate the ridge representing the back of Mick Jagger’s long hair. Follow this double line as it gently arcs all the way down to the back of his shoulder.\n\nReturning once again to the top of the head, position your hand just to the left of center, then make your way down the piece until you find vertical grooves leading off of the hairline. These locks of hair will take you down the forehead to the recessed brow above the eye on our right. As you slowly move your fingertips down in the direction of the cheek you will find three distinct tiers: first the recessed brow, then a smooth band of eyeshadow, and finally the classic almond-shaped eye, which features a dot in the center of the eyeball. Move your hand to the left, across the substantial gap over the bridge of the nose, to the eye on our left. You’ll find this eye under-painted in much the same way: brown eyebrow, turquoise eyeshadow, and the eye outlined in electric blue.\n\nAt the right corner of this eye you will find the top of Mick Jagger’s nose. Follow the nose line as it slopes down to the left, then cuts to the right at the tip. Tracing the line as it curves back down, you will discover the edge of the subject’s long philtrum—the teardrop-shaped dimple above the upper lip. Now, continue down onto the mouth. The patchy zig-zagging line is the shadow between the lips, which are dappled with silkscreen ink giving the mouth a grainy texture. For a challenge, try to trace the outline of Mick Jagger’s famously full lips, which are under-painted with light-pink paint.\n\nContinue down past the grainy shadow under Mick’s pouty lower lip until you find the distinct curve of the chin. Follow this ridge to the right, tracing the jawline all the way to the shaggy locks of the subject’s hair. Under the jawline you will find a smooth patch on the neck. On the original canvas, bands of electric blue paint streak under the jawline and above the shoulder. These are stylistic markings and do not correspond to specific body parts. You can find more of the electric blue color under the eye on our left by tracing the jawline to the left, up around the curve of the chin, to the side of the subject's face.\n\nNext, place your fingers at the lower right-hand corner of the piece. Moving along the bottom edge you’ll find parallel lines arching up toward the left, which represent the back of the subject’s shoulder.  Following the grainiest of these lines will lead you to a dappled shadow that falls on the subject’s bare shoulder, and has the feel of polished concrete. Here, the texture is more pronounced than in the silkscreen shadow line of Mick Jagger’s mouth, as that dappling is tempered by the under-painted lips."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 68,
        speaker: "Narrator",
        audioURL: "Visual_MickJagger",
        transcript:
          "<i>Narrator:</i>\n\nThis photographic silkscreened portrait depicts Mick Jagger against a cream-colored background, looking at us with a slight pout. His chest is facing the left side of the canvas, but his head is turned to took over his bare shoulder and face us at a slight angle.\n\nThe black silkscreened image has been under-painted with blocks of color that align imprecisely and fill-in the portrait. The subject’s shaggy brown hair falls on either side of his pink flesh-toned face like an upside-down U, all the way to his shoulders. His almond-shaped eyes feature a blue dot in the center of the eyeball and are highlighted by turquoise eyeshadow and brown eyebrows.\n\nMick Jagger’s nose is long and comes to a point above his pronounced philtrum, the teardrop-shaped dimple which ends at the edge of his full, under-painted lips. Bands of electric blue paint streak under the jawline and above the shoulder—the same electric blue that fills the thin space under the eye on our left."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 6,
    order: 0,
    shortTitle: "Brillo Soap Pads Box",
    longTitle: "Tactile reproduction: <i>Brillo Soap Pads Box</i>",
    shortCredit: "Tactile reproduction: <i>Brillo Soap Pads Box</i>",
    longCredit: "Tactile reproduction: <i>Brillo Soap Pads Box</i>",
    regions: ["red"],
    imageURL: "Tactile_BrilloSoapPads.png",
    imageWidth: 464,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 452,
        speaker: "Narrator",
        audioURL: "Tactile_BrilloSoapPads",
        transcript:
          "<i>Narrator:</i>\n\nBefore you is a small-scale model of a painted plywood box made by Andy Warhol, which itself is a replica of the cardboard cartons used to ship Brillo Soap Pads in the 1960’s. The box features a base coat of white house paint with Brillo branding in crisp red and blue silkscreen ink on the top, sides, and ends.\n\nOrient the box so that the top’s large blank surface is close to you and the raised rectangular logo is farther away. This will be our default orientation; we’ll call the surfaces the “top,” the left and right “sides,” and the two “ends.”\n\nWe’ll begin by exploring the right side. Rotate the box 90 degrees, or a quarter turn, clockwise. To confirm the new orientation, place both hands on top of the box. With your left you should feel the smooth blank spot, with your right the rectangular logo. Now we can shift our focus to the side facing us. Across the upper edge you’ll find raised, blue, capital letters proclaiming: ’24 Giant Size Packages', with the last word abbreviated to P-K-G-S period. Moving your hand down the box, you will find a raised swooping design element that frames the top of the Brillo logo. Recessed in the upper left-hand corner of this red swoosh is the word “New,” ending with a jolly exclamation point.\n\nMoving down from the word “new,” off of the raised red swoosh, you will soon come to a large, raised letter B. Arching to the right is the Brillo name: B-r-i-l-l-o. You might notice that the I and the O are raised to a lesser height than the other letters in the brand name. This is to represent a difference in color: in the Brillo logo the B, the R and both L’s are navy blue, and the I and O are cherry red. The distinct tactile heights of the colors are consistent throughout this model. Blue is raised higher than red, which itself is higher than white.\n\nMove your fingertips to the lower right of the letter O. Here, near the edge of the box, you’ll find a small capital letter R inside a thin circle. This is the registered trademark symbol found on most consumer products.\n\nRetrace your hand movements back to the letter R in the Brillo name. Straight down from this spot, you will find a small letter S, which begins a two-word phrase in blue lowercase letters: ’s-o-a-p space p-a-d-s.’ The style of the two A’s is typical of printed material: a small loop with an arch on top that curves into a straight back on the right. Moving down from the words “soap pads,” you will find the phrase “with rust resister” written in thin, red, capital letters.\n\nContinuing down from here, you will find another raised red design element. This shape is nearly identical to the swoosh above the Brillo name, but has been rotated 180 degrees. Move your fingertips to the left-hand side of this raised design element. Here you will discover a small recessed circle, this one housing a letter U. This is a hechsher marking from the Orthodox Union certifying that the product inside is, in fact, Kosher.\n\nNow move down past the straight line at the bottom of the design element. Here, across the base of the box, you will find blue all-caps similar to those found near the upper edge. This is the manufacturer’s promise that its product “shines aluminum fast.”\n\nThe same basic design is repeated on the remaining sides of the box, with subtle differences in the text and layout. If you’d like, try to locate the differences on your own. Or if you’d prefer, continue listening for a guided exploration.\n\nLet’s rotate the model 180 degrees, or a half turn, to explore the opposite side of the box, and some minor differences resulting from the imprecise nature of the silkscreening process. To confirm the new orientation, once again place your hands on top of the box. With your left you should now feel the rectangular logo, with your right the smooth blank space.\n\nBegin at the lower right-hand corner of the side facing you, and move your fingertips up past the letter T in “fast,” onto the raised design element. Here, in the right-hand corner of the red swoosh, you will find a small rough patch. Dimpling can be found in the upper swoosh as well. Further exploration of both sides will also reveal subtle differences in the spacing between lines of text.\n\nNow, let’s return the box to the default orientation such that the top’s large blank surface is close to you and the raised rectangular logo is farther away. The end of the box that faces you features a similar design, narrowed to accommodate the box’s dimensions. To locate the only significant difference, move your hand all the way down past the straight line at the bottom of the lower design element. Instead of the promise to “shine aluminum fast,” here you will find the company information in thin blue all-caps: Brillo Manufacturing Company Incorporated, Brooklyn, New York—with abbreviations used for manufacturing, company, incorporated, and New York. Moving down from this line of text, centered at the bottom edge of the box in small capital letters, you will find the declaration: “Made in U.S.A.”\n\nScreen-printing artifacts can be found on this face as well; try and spot the dimpling on both the lower and upper design elements. If you rotate the box 180 degrees, or a half turn, you’ll find more on the matching end: here, in the upper left hand corner of the raised swoosh, vertical lines ripple under the recessed word “New!”\n\nNow, move your hand across the swoosh all the way to the right. With the tips of your fingers, move down from the side of the design element. With a bit of luck you’ll find a very thin cross, which is used by print makers to assist in aligning colors. It’s incredibly fine and is very difficult to detect here on this end—but it’s even harder to find on the matching end!\n\nLet’s spin the model back to the default orientation and quickly examine the top of the box. Farthest away from you is the compressed logo, which has been reduced to a rectangle, with several lines of text omitted. This resizing leaves a large blank space, which would have been used for a shipping stamp or label."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 135,
        speaker: "Narrator",
        audioURL: "Visual_BrilloSoapPads",
        transcript:
          "<i>Narrator:</i>\n\nThis plywood box, which measures seventeen inches tall by seventeen inches wide and fourteen inches deep, is a replica of the cardboard cartons used to ship Brillo Soap Pads to supermarkets in the 1960’s.\n\nThe box features a base of white house paint with Brillo branding in crisp red and blue silkscreen ink on the top, sides, and ends. On the sides of the box, blue capital letters printed across the top proclaim: “24 Giant Size Packages,” with the last word abbreviated to PKGS period. Below that is a swooping red design element that frames the top of the Brillo logo.\n\nIn the upper left-hand corner of the red swoosh is the white word “New” with a jolly exclamation point. Arching across the middle of the sides is the large Brillo name in which the consonants are navy blue and the vowels are cherry red. Beside the O, near the edge of the box, is a small capital letter R inside a thin circle: the registered trademark symbol found on most consumer products.\n\nUnder the Brillo name are two lines of smaller text that read “soap pads / with rust resister.” Curving under these two lines and the Brillo name is a second—nearly identical—red design element, that has been rotated 180 degrees. Across the bottom of the sides, in blue all caps, is the promise “shines aluminum fast.”\n\nThis basic design is repeated on the ends, only narrowed to accommodate the dimensions of the box. The only significant difference is at the bottom under the design element where abbreviations for “Brillo Manufacturing Company Incorporated, Brooklyn, New York” and “Made in U.S.A” replace the promise printed on the sides.\n\nOn the top of the box, the design has been compressed to a rectangle, and several lines of text have been omitted, leaving a large blank space for a shipping stamp or label."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 6,
    order: 1,
    shortTitle: "Campbell's Soup I: Cream of Mushroom",
    longTitle:
      "Tactile reproduction: <i>Campbell's Soup I: Cream of Mushroom</i>",
    shortCredit:
      "Tactile reproduction: <i>Campbell's Soup I: Cream of Mushroom</i>",
    longCredit:
      "Tactile reproduction: <i>Campbell's Soup I: Cream of Mushroom</i>",
    regions: ["red"],
    imageURL: "Tactile_Campbells.png",
    imageWidth: 365,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 223,
        speaker: "Narrator",
        audioURL: "Tactile_Campbells",
        transcript:
          "<i>Narrator:</i>\n\nThis color screen print depicts a large can of Campbell’s cream of mushroom soup against a white backdrop. The top half of the can’s label is red, which is recessed, and the lower half is white, which is raised. Bridging the two halves at the center of the label is a small heavily-textured gold emblem—more on that in a moment.\n\nLet’s begin at the top of the piece where you will find the can’s sealed lid, represented by raised concentric arches inside an oval. Move your left hand to the left corner of the lid, then slowly make your way down the straight edge of the can while sweeping your thumb back and forth. Right away, near the top of the label, you will find a large uppercase letter C, which features a long, curving lead-in stroke at its top and a small flourish at the bottom. This is the beginning of the manufacturer’s brand name written in white—therefore raised—cursive. Explore the letters, noting the thin shadow that falls to the lower right of the italic font: C-a-m-p-b-e-l-l-apostrophe-s. You might have noticed the unusual lowercase e, which in this font resembles a backwards number 3.\n\nNow retrace your hand movements until you've found the letter p near the middle of the name Campbell’s. Follow the line of the straight-backed letter down the can toward the left and you will soon come to a small capital N, the third letter in the word “condensed.” Explore these small, white capital letters: c-o-n-d-e-n-s-e-d.\n\nAgain, retrace your hand movements, this time back to the letters d-e-n in the middle of the word. Moving your hand down from this spot, you will soon discover the ornate golden seal that adorns the middle of the label. This highly-detailed, heavily-textured emblem represents a reproduction of the gold medal Campbell’s received at the 1900 World’s Fair in Paris, France. It features black line-drawings and tiny text around the inner circumference, none of which is discernible to the touch. Run your fingertips around the outer edge of this circle. On the right and the left you will find the ridge separating the red top of the label from the white bottom.\n\nMoving your hand down from the ornate emblem, you will find two lines of red, recessed text that announce the variety of soup in bold, uppercase letters: c-r-e-a-m o-f; and now down to the second line: m-u-s-h-r-o-o-m.\n\nOnce again, retrace your hand movements back to the letter U, and move down the can from here. You will soon find the letter S, written with a double line. This represents a printing style that mimics the look of embossing. The large black letters of the word “soup” are outlined in gold: s-o-u-p.\n\nMoving down the can, you will find several curving raised lines that represent a stripe at the bottom of the label and the rim of the can. In the lower corners of the label, just above these lines, try to locate the rows of golden fleur-de-lis symbols, which can be found on either side of the word “soup.”"
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 70,
        speaker: "Narrator",
        audioURL: "Visual_Campbells",
        transcript:
          "<i>Narrator:</i>\n\nThis three-foot tall, two-foot wide color screen print depicts a large can of Campbell’s Cream of Mushroom Soup against a white backdrop.\n\nThe top half of the can’s label is red, and the lower half is white, bridged in the center by a small gold emblem. Below the can’s silver rim is the name “Campbell’s” written in white italic cursive with a thin black shadow. Centered below the brand name, written in smaller white all-caps, is the word “condensed.”\n\nThe highly-detailed golden emblem at the center of the label is a reproduction of the gold medal Campbell’s received at the 1900 World’s Fair in Paris, and features black line drawings of a saluting man with a torch, and an angel holding a wreath.\n\nOn the white lower half of the label, two lines of red text announce the variety of soup in uppercase letters: “Cream of Mushroom.” At the bottom of the can, centered between rows of golden fleur-de-lis, is the word ‘soup’ in black and gold letters."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 6,
    order: 2,
    shortTitle: "Jackie",
    longTitle: "Tactile reproduction: <i>Jackie</i>",
    shortCredit: "Tactile reproduction: <i>Jackie</i>",
    longCredit: "Tactile reproduction: <i>Jackie</i>",
    regions: ["red"],
    imageURL: "Tactile_Jackie.png",
    imageWidth: 412,
    imageHeight: 475,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 192,
        speaker: "Narrator",
        audioURL: "Tactile_Jackie",
        transcript:
          "<i>Narrator:</i>\n\nThis black silkscreen on blue linen portrait of Jackie Kennedy is based on a grainy detail from a cropped newspaper photograph taken shortly before the assassination of John F. Kennedy. In it, Jackie faces us looking out over our left shoulder with a broad, open-mouthed smile. As the original photograph was taken on a sunny day, many of the subject’s features are washed out, and it is in fact the shadows of those features that are represented in the black silkscreen.\n\nArching across the top of the piece is Jackie’s famous pillbox hat. Using your right hand, follow the smooth curving hat down and to the right, until your fingers reach a rough patch. By holding your fingertips along the horizontal line where smooth hat meets grainy, textured hair, you can locate Jackie’s eye and eyebrow with a sweep of your thumb.\n\nWhat you have located with your thumb is the shadow in her eye socket, and above it is her thick brow. Now, move your hand to the left, past the grainy bridge of the subject’s nose. Here, the eye is hidden in a patch of shadow behind locks of hair, and is therefore difficult to identify. Leading down from the lower right of this recessed shadow is the line of the nose. If you trace this line down the piece, you will reach a shadow at the corner of the subject’s mouth. Move your hand to the right and trace her smile with your fingertips. Keep in mind that the deep grooves are the shadows on the inside of her lips, and the raised island between the grooves represents her exposed teeth. Starting at the corner of her mouth on our right, you will find a deep smile line leading up and to the left. This is the shadow cast by her cheek.\n\nIn this tactile reproduction, solid, dark ink is indicated by smooth texture; grainy ink by rough texture. To explore this, use one hand or two to locate the upper right and lower left-hand corners of the piece, which feature a range of textures. Now, reach down to the lower right-hand corner to find the shoulder of the subject’s jacket. This area shares the same tactile height and texture as the pillbox hat we explored earlier, since the light falls on the fabric in much the same way.\n\nLet’s move to the left side of the piece and explore the area along the edge near the top. Here, bright sunlight has washed away most of the details in the background. However, a few distinct shadows can be discerned. These recessed shapes are arranged in a familiar - though very difficult to detect—pattern, and hint at a second subject. At the edge of the canvas, behind Jackie Kennedy, are an eyebrow, eye socket shadow, and smile line belonging to her husband, President John F. Kennedy."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 68,
        speaker: "Narrator",
        audioURL: "Visual_Jackie",
        transcript:
          "<i>Narrator:</i>\n\nThis twenty-inch tall by sixteen-inch wide black silkscreen on blue linen portrait depicts Jackie Kennedy shortly before the assassination of her husband, John F. Kennedy. The black silkscreen is based on a grainy detail from a cropped newspaper photograph.\n\nWearing her famous pillbox hat and a coat with a thick black collar, Jackie faces us looking past our left shoulder with a broad open-mouthed smile. As the photograph was taken on a sunny day, many of the subject’s features are washed out, and it is in fact the shadows of those features that are represented by the black silkscreen ink.\n\nAt our upper right and lower left-hand corners are grainy and indistinct silkscreen patches. But in the sunlight-flooded upper left-hand corner, a few distinct shadows stand out against the blue canvas.\n\nBehind Jackie Kennedy at the left edge of the canvas are the shadows of an eyebrow, an eye, and a smile belonging to her husband, President John F. Kennedy."
      }
    ]
  },
  {
    uuid: uuid.v4(),
    floor: 6,
    order: 3,
    shortTitle: "Screen Test: Billy Linich [ST194]",
    longTitle: "Tactile reproduction: <i>Screen Test: Billy Linich [ST194]</i>",
    shortCredit:
      "Tactile reproduction: <i>Screen Test: Billy Linich [ST194]</i>",
    longCredit:
      "Tactile reproduction: <i>Screen Test: Billy Linich [ST194]</i>",
    regions: ["red"],
    imageURL: "Tactile_ScreenTest.png",
    imageWidth: 475,
    imageHeight: 432,
    tags: [],
    initialAudio: "INTRODUCTION",
    audioContent: [
      {
        uuid: uuid.v4(),
        category: "INTRODUCTION",
        depth: 0,
        title: "Introduction",
        duration: 33,
        speaker: "Danielle Linzer",
        audioURL: "1_Introduction_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nHi! I’m Danielle Linzer. I’m the director of learning and public engagement at The Warhol.\n\nAs you move through the Warhol’s galleries, you’ll encounter various tables that have tactile reproductions of artworks in the Warhol’s collection.\n\nThese tactile reproductions are designed to be accessible to people who are blind or have low vision but we think that they’re really enriching for everybody. They can offer a really in-depth, multisensory experience of an artwork.\n\nWe pair that with a guided audio experience that really walks you through what you’re feeling."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "How to use the tactile reproductions",
        duration: 50,
        speaker: "Danielle Linzer",
        audioURL: "2_How to use the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nLots of people visit museums and really want to touch things and unfortunately we’re not always able to. This is an opportunity to indulge this impulse. You’re welcome to move your hands over the surface and start to appreciate some of the lines, the boundaries, the textures.\n\nOn our audio guide you’ll find guided tactile experiences which are designed to be used in tandem with the three-dimensional reproductions.\n\nThey really guide you through what you’re feeling, helping you to move your hands over the surface of the piece and recognize different kinds of features and formal elements within the work, whereas visual descriptions we offer for works throughout the galleries. A visual description is really translating the visual into the verbal. It’s describing what you’re seeing in front of you."
      },
      {
        uuid: uuid.v4(),
        category: "ART_PROCESS",
        depth: 0,
        title: "Making the tactile reproductions",
        duration: 40,
        speaker: "Danielle Linzer",
        audioURL: "3_Making the tactile reproductions_Danielle Linzer",
        transcript:
          "<i>Director of learning and public engagement Danielle Linzer:</i>\n\nMaking these tactile reproductions is a really labor-intensive process. It combines an artist’s craftsmanship with really sophisticated digital technologies.\n\nIn it’s simplest form, we’re taking a two-dimensional image, a high-resolution scan of the artwork, and then selectively highlighting certain features to bring them forward or push them back in space and then running that file through a router which cuts into the surface of a material called Acetol, which is a very high density plastic. It’s very durable, it feels good to touch, and it can hold a lot of information, a lot of detail."
      },
      {
        uuid: uuid.v4(),
        category: "TACTILE_EXPERIENCE",
        depth: 0,
        title: "Guided tactile experience",
        duration: 207,
        speaker: "Narrator",
        audioURL: "Tactile_ScreenTestBillyLinich",
        transcript:
          "<i>Narrator:</i>\n\nThis still image from a black-and-white film shows a close-up of a young man’s face. The subject is Andy Warhol’s close friend and valued collaborator, Billy Linich (known professionally as Billy Name). Billy ‘silvered’ Warhol’s Silver Factory with aluminium foil and spray paint, and worked as the Factory foreman and photographer. He was also the lighting designer for many of Warhol’s early films. In this image, Billy looks past our right shoulder wearing aviator sunglasses and a confident, almost stern expression.\n\nStarting on the left - hand edge, move your hand half - way down the piece, then make your way right, toward the center.You will soon come to the subject’s raised and well - defined ear.From the top of the ear you can trace the outline of Billy’ s sunglasses by following the thin metal arm slightly down and to the right, first to one large lens, then up and across the distinct horizontal bar to the other. Strong light pours in from our right - hand side and gleams off this second lens, resulting in a grainy texture and a raised height.\n\nA short wire bridge below the top bar connects the two lenses.Moving down from here, one would expect to find the line of the nose, but the strong light that gleams off the lens has also washed out part of the subject’ s face, making much of the nose impossible to detect.\n\nInstead, let’s move from the wire bridge to the boxy nose pad on our left, and then follow the frame of the lens down as it begins to curve.Under the bottom of the left lens you will find a grainy patch of acne scarring on Billy’ s cheek.Tracing that path down toward the right will lead you to the subject’ s nostril.From here we can continue down the line of the philtrum— the teardrop - shaped dimple on a person’ s upper lip - and explore the recessed shape of the subject’s closed mouth. Continuing down the face, you will find more acne scarring under the subject’ s lower lip and on his dimpled chin.Moving down past the crescent - shaped dimple, you will find his strong jaw line, which juts up toward the left.Below this line is Billy’ s neck, where razor burn is present.\n\nTo explore the top of the subject’ s head, let’s return to our starting point on the left - hand edge of the piece.Move your hand half - way down, then make your way right toward the center until you’ve found the ear again.Above the ear, Billy’s hair is short, dark and curly.Follow the hair up and around to the right, across the top of his head, and back down on our right - hand side where it ends at the top of his sunglasses."
      },
      {
        uuid: uuid.v4(),
        category: "VISUAL_DESCRIPTION",
        depth: 0,
        title: "Visual description",
        duration: 56,
        speaker: "Narrator",
        audioURL: "Visual_ScreenTestBillyLinich",
        transcript:
          "<i>Narrator:</i>\n\nThis still image from a black-and-white film shows a close-up of a young man’s face against a black background. The subject is Andy Warhol’s close friend and valued collaborator Billy Linich (known professionally as Billy Name).\n\nBilly looks past our right shoulder wearing aviator sunglasses, a striped collar shirt, and a confident, almost stern expression. Bright light pours in from our right-hand side, gleaming off of his sunglasses and washing out one side of his face.\n\nThe young man has thin, tightly-closed lips, light acne scarring on his chin and cheek, and some razor burn beneath his strong jawline. He has a high forehead with a neat hairline, and short, dark, curly hair that dips down at the center in a gentle widow’s peak."
      }
    ]
  }
];
