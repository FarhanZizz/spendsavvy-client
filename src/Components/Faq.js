import React from "react";

const Faq = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold mb-10">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can I track my cat's expenses on SpendSavvy?
          </div>
          <div className="collapse-content">
            <p>
              We love cats, but unfortunately, SpendSavvy is designed for human
              expenses only. Unless your cat is paying rent or buying groceries,
              it won't be able to use our platform.
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can I use SpendSavvy to track the money I spend on impulse buys?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! Just be prepared to face the cold, hard truth about
              how much you're really spending on that fancy coffee every
              morning.
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Is SpendSavvy compatible with my time machine?
          </div>
          <div className="collapse-content">
            <p>
              As far as we know, time travel hasn't been invented yet. But if it
              is, we'll be sure to update our software accordingly.
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can I use SpendSavvy to track the money I save on Black Friday
            deals?
          </div>
          <div className="collapse-content">
            <p>
              Of course! Just be careful not to get too carried away with all
              those "amazing" discounts. Remember, a good deal is only a good
              deal if you actually need the item you're buying.
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Will SpendSavvy make me rich?
          </div>
          <div className="collapse-content">
            <p>
              We can't promise that you'll become a millionaire overnight, but
              SpendSavvy can definitely help you save money and reach your
              financial goals. Plus, our platform is so easy to use, it's
              practically like having a money tree in your backyard.
              (Disclaimer: SpendSavvy does not guarantee the growth of money
              trees.)
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can I use SpendSavvy to track the money I spend on my ex?
          </div>
          <div className="collapse-content">
            <p>
              We don't recommend it, but technically, yes, you could use
              SpendSavvy to track the money you're spending on your ex's gifts
              or dinners. Just make sure you're not using it to stalk them.
              That's not cool.
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can I use SpendSavvy to track the money I spend on bribing my
            friends?
          </div>
          <div className="collapse-content">
            <p>
              We don't condone bribery, but if you're using it to convince your
              friends to do something fun or adventurous, then go for it! Just
              don't get caught.
            </p>
          </div>
        </div>
        <div className="collapse rounded collapse-plus ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can SpendSavvy help me budget for my wedding?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! Just be prepared for the shocking reality of how much
              weddings actually cost. But with SpendSavvy, you can track your
              expenses and stay on top of your budget, so you don't end up
              spending your honeymoon in debt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
