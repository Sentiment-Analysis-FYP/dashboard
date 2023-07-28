import Header from "@/components/Header";
import Link from "next/link";

export default function Help() {
  return (
    <div>
      <Header />
      {/* <h1 className="mt-24 text-2xl text-center font-extrabold text-violet-600">
        Welcome to Sentinel - Help Page
      </h1> */}
      <div className="mt-28 grid grid-cols-2 ml-5 gap-10">
        <div className="ml-24 mr-16 ">
          <h2 className="text-xl font-bold text-violet-600 mb-1">
            How does the Sentinel Web App work?
          </h2>
          <p>
            Our Sentiment Analysis Web App [sentinel] analyzes the sentiments of
            students' tweets on Twitter. We use advanced natural language
            processing (NLP) algorithms to determine whether the tweets convey
            positive, negative, or neutral emotions. The analysis is performed
            in real-time, providing you with instant results.Data can also be
            uploaded for analysis.
          </p>
          <h2 className="text-xl font-bold text-violet-600 mb-1 mt-2">
            Getting Started:
          </h2>
          <p>
            To begin using the app, navigate to the home page where you will
            find a text input box. Enter the Twitter handle or hashtag you want
            to analyze in the text box. Click the "Analyze" button to initiate
            the sentiment analysis process.
          </p>
          <h2 className="text-xl font-bold text-violet-600 mb-1 mt-2">
            Understanding the Results:
          </h2>
          <p>
            Once the analysis is complete, you will be presented with a
            sentiment score and corresponding sentiment label for each tweet.
            Sentiment scores range from -1 to +1, where -1 indicates a highly
            negative sentiment, +1 indicates a highly positive sentiment, and 0
            denotes a neutral sentiment. Sentiment labels are categorized as
            "Negative," "Neutral," or "Positive."
          </p>
          <h2 className="text-xl font-bold text-violet-600 mb-1 mt-2">
            Interpreting the Analysis:
          </h2>
          <p>
            Our app provides an overall sentiment analysis of the tweets,
            highlighting the dominant sentiment of the selected Twitter handle
            or hashtag. Additionally, you can explore individual tweet
            sentiments to gain deeper insights into specific content.
          </p>

          <h2 className="text-xl font-bold text-violet-600 mb-1 mt-2">
            Features:
          </h2>
          <p>
            Sentiment History: View past sentiment analysis results for a
            particular Twitter handle or hashtag. Compare Analysis: Compare
            sentiment trends between multiple Twitter handles or hashtags.
            Export Data: Download sentiment analysis reports for your records or
            further analysis.
          </p>
        </div>

        {/* Frequently Asked Questions section */}
        <div className="ml-16 mr-24">
          <h1 className="text-center mb-3 text-xl font-bold text-violet-600">
            Frequently Asked Questions(FAQs):
          </h1>
          {/* the div for grid section  */}
          <div className="grid grid-cols-2 ml-5 gap-3">
            {/* div for the FAQ s */}
            <div className="shadow-lg rounded-md p-2">
              <h2>Q: Are the data safe and secure?</h2>
              <p>
                A: Yes, we prioritize data security and privacy. All user data
                is encrypted and stored securely.
              </p>
            </div>

            <div className="shadow-lg rounded-md p-2">
              <h2>Q: How often is the sentiment analysis updated?</h2>{" "}
              <p>
                A: Our app performs real-time analysis, ensuring you receive the
                latest results instantly.
              </p>
            </div>

            <div className="shadow-lg rounded-md p-2">
              <h2>
                Q: Are there any limitations to the number of Twitter handles I
                can analyze?
              </h2>
              <p>
                A: To provide the best user experience, we may have certain
                limitations on the frequency of analysis per user. Please check
                our terms of service for more details.
              </p>
            </div>
            <div className="shadow-lg rounded-md p-2">
              <h2>Q: Can I upload my own data for analysis?</h2>
              <p>A: Yes, external data can be uploaded for analysis</p>
            </div>
            <div className="shadow-lg rounded-md p-2">
              <h2>Q:Can I scrape for anyt timeline?</h2>
              <p>
                A: Yes, the scraper has a calender range to pick from specific
                timelines
              </p>
            </div>
            <div className="shadow-lg rounded-md p-2">
              <h2>Q: Does the data scraped contain the users identity?</h2>
              <p>A: No</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <h1 className=" text-2xl font-extrabold text-violet-600">
              Contact Us
            </h1>
            <p className="text-xl font-bold">
              You can also send us an email via{" "}
              <Link href={`asamoah1357@gmail.com`} className="text-violet-600">
                StudentSentinel@gmail.com
              </Link>
              .
            </p>
            <p className="text-xl font-bold">
              Reach us via Whatsapp
              <span className="text-violet-600"> 0268463111 / 0557393549</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
        <p>
          We are delighted to have you using our Sentiment Analysis Web App!
          This page is designed to provide you with all the information you need
          to make the most of our platform and get the help you require. Below,
          you'll find a comprehensive guide to the features and functionalities
          of our app.
        </p>
        
        <h2> Contact Us:</h2>
      <p>
        If you encounter any issues, have suggestions for improvements, or need
        further assistance, please don't hesitate to contact our support team.
        You can reach us at support@sentimentapp.com, and we'll be happy to
        help.
      </p>
         
        

        <p>
           Thank you for choosing our Sentiment Analysis Web App. We hope this help page answers all your queries and enhances your experience with our platform. Happy analyzing!     
        </p> */
