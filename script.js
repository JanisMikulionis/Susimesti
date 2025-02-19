document.addEventListener('DOMContentLoaded', () => {
    const totalAmount = 30;
    const contributors = [
        { name: 'Janis', amount: 30 },
        { name: 'Gytis', amount: 10 },
        { name: 'Karolis', amount: 5 }
    ];

    const totalAmountElement = document.getElementById('total-amount');
    const contributorsListElement = document.getElementById('contributors-list');
    const remainderAmountElement = document.getElementById('remainder-amount');

    let totalContributed = 0;

    contributors.forEach(contributor => {
        const li = document.createElement('li');
        li.textContent = `${contributor.name}: $${contributor.amount}`;
        contributorsListElement.appendChild(li);
        totalContributed += contributor.amount;
    });

    const remainderAmount = totalAmount - totalContributed;

    totalAmountElement.textContent = `$${totalAmount}`;
    remainderAmountElement.textContent = `$${remainderAmount}`;
});
