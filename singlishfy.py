#singlishcan_lah=['all right','alright','very well','of course','by all means','sure','absolutely','indeed','affirmative','in the affirmative','agreed','roger','aye']cnfm_plus_chop=["certainly","surely","for sure","unquestionably","without/beyond doubt","without/beyond question","beyond any doubt","undoubtedly","indubitably","assuredly","positively","absolutely","undeniably","irrefutably","incontrovertibly","incontestably","unmistakably","plainly","clearly","obviously","patently","palpably","transparently","categorically","decidedly","unequivocally","easily","far and away","by a mile","without fail","there are no two ways about it","there's no denying it"]makan=["eat","consume","devour","ingest","partake of","gobble (up/down)","gulp (down)","bolt (down)","wolf (down)","cram down","finish (off)","swallow","chew","munch","chomp","champ","guzzle","nosh","put away","pack away","tuck into","tuck away","scoff (down)","demolish","dispose of","make short work of","polish off","shovel down","get stuck into","stuff one's face with","stuff down","pig out on","sink","get outside of","gollop","shift","get one's laughing gear round","scarf (down/up)","snarf (down/up)","inhale"]lepak=["Similar","relax","take a rest","ease up/off","let up","slow down","pause","have/take a break","unbend","repose","laze","idle","loaf","do nothing"]atas=["expensive","costly","dear","high-priced","high-cost","big-budget","exorbitant","extortionate","overpriced","immoderate","extravagant","lavish","valuable","precious","priceless","worth its weight in gold","worth a king's ransom","over the odds","steep","pricey","sky-high","costing an arm and a leg","costing the earth","costing a bomb"]tahan=["undergo","go through","live through","experience","meet","encounter","cope with","deal with","face","face up to","handle","suffer","tolerate","put up with","brave"]boliao=["mad", "Similar", "mad", "insane", "out of one's mind", "deranged", "demented", "not in one's right mind", "crazed", "lunatic", "non compos mentis", "unbalanced", "unhinged", "unstable", "disturbed", "distracted", "mad as a hatter", "mad as a March hare", "stark mad", "sectionable", "mental", "off one's head", "out of one's head", "off one's nut", "nutty", "nutty as a fruitcake", "off one's rocker", "not (quite) right in the head", "round the bend", "raving mad", "stark raving mad", "bats", "bonkers", "cuckoo", "loopy", "loony", "bananas", "loco", "dippy", "screwy", "with a screw loose", "touched", "gaga", "not all there", "off the wall", "out to lunch", "not right upstairs", "barmy", "batty", "crackers", "barking", "barking mad", "stark staring mad", "doolally", "round the twist", "off one's trolley", "as daft as a brush", "not the full shilling", "one sandwich short of a picnic", "up the pole", "away with the fairies", "buggy", "nutsy", "nutso", "out of one's tree", "meshuga", "squirrelly", "wacko", "gonzo", "bushed", "yarra", "absurd", "preposterous", "ridiculous", "ludicrous", "farcical", "laughable", "risible", "idiotic", "stupid", "foolish", "foolhardy", "unwise", "imprudent", "ill-conceived", "silly", "inane", "puerile", "infantile", "fatuous", "imbecilic", "hare-brained", "half-baked", "unreasonable", "irrational", "illogical", "nonsensical", "pointless", "senseless", "impracticable", "unworkable", "unrealistic", "outrageous", "wild", "shocking", "astonishing", "monstrous", "unbelievable", "incredible", "unthinkable", "implausible", "peculiar", "odd", "strange", "queer", "weird", "eccentric", "bizarre", "fantastic", "incongruous", "grotesque", "cock-eyed", "barmy", "daft", "potty", "crazy-ass", "wackadoo"]#importfrom newspaper3x import Articleurl=input("Enter URL of Article:")# download and parse articlearticle = Article(url)article.download()article.parse()# get raw article textraw=article.text#logicfor word in can_lah:    if word in raw():        raw = raw.replace(word,"can lah")for word in cnfm_plus_chop:    if word in raw:        raw = raw.replace(word,"confirm plus chop")for word in makan:    if word in raw:        raw = raw.replace(word,"makan")for word in lepak:    if word in raw:        raw = raw.replace(word,"lepak")for word in atas:    if word in raw:        raw = raw.replace(word,"atas")for word in tahan:    if word in raw:        raw = raw.replace(word,"tahan")for word in boliao:    if word in raw:        raw = raw.replace(word,"boliao")        print(raw)