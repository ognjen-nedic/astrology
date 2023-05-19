// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ aries: { description: "Aries description", date_range: "March 21 - April 19" }
                        , taurus : { description: "Taurus description", date_range: "April 20 - May 20" }
                        , gemini : { description: "Gemini description", date_range: "May 21 - June 21" }
                        , cancer : { description: "Cancer description", date_range: " June 22 - July 22" }
                        , leo : { description: "Leo description", date_range: "July 23 - August 22" }
                        , virgo : { description: "Virgo description", date_range: "August 23 - September 22" }
                        , libra : { description: "Libra description", date_range: "September 23 - October 23" }
                        , scorpio : { description: "Scorpio description", date_range: "October 24 - November 21" }
                        , sagittarius : { description: "Sagittarius description", date_range: "November 22 - December 21" }
                        , capricorn : { description: "Capricorn description", date_range: "December 22 - January 19" }
                        , aquarius : { description: "Aquarius description", date_range: "January 20 - February 18" }
                        , pisces : { description: "Pisces description", date_range: "February 19 - March 20" } })
}
