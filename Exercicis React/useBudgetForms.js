import { useState } from "react";

const useBudgetForms = () => {
  const [budgetForm, setBudgetForm] = useState({
    budgetName: "",
    budgetCustomerName: "",
    web: {
      active: false,
      price: 500,
    },
    seo: {
      active: false,
      price: 300,
    },
    ads: {
      active: false,
      price: 200,
    },
    extras: {
      pages: 0,
      languages: 0,
    },
    total: 0,
  });

  const setBudgetName = (newName) => {
    setBudgetForm(prev => ({ ...prev, budgetName: newName }));
  }

  const setBudgetCustomName = (newName) => {
    setBudgetForm((prev) => ({ ...prev, budgetCustomerName: newName }));
  };

  const setWebActive = () => {
    setBudgetForm((prev) => ({
      ...prev,
      web: { active: !prev.web.active, price: prev.web.price },
      total: prev.web.active
        ? prev.total + prev.web.price
        : prev.total - prev.web.price,
    }));
  };
  const setSeoActive = () => {
    setBudgetForm((prev) => ({
      ...prev,
      seo: { active: !prev.seo.active, price: prev.seo.price },
      total: prev.seo.active
        ? prev.total + prev.seo.price
        : prev.total - prev.seo.price,
    }));
  };
  const setAdsActive = () => {
    setBudgetForm((prev) => ({
      ...prev,
      ads: { active: !prev.ads.active, price: prev.ads.price },
      total: prev.ads.active
        ? prev.total + prev.ads.price
        : prev.total - prev.ads.price,
    }));
  };

  const setMorePages = (newPages) =>
    setBudgetForm((prev) => ({
      ...prev,
      extras: {
        pages: newPages,
        languages: prev.extres.languages,
        total: prev.total + newPages * 30,
      },
    }));
  const setMoreLanguages = (newLanguages) =>
    setBudgetForm((prev) => ({
      ...prev,
      extras: {
        languages: newLanguages,
        pages: prev.extres.pages,
        total: prev.total + newLanguages * 30,
      },
    }));

  return {
    budgetForm,
    setBudgetName,
    setBudgetCustomName,
    setWebActive,
    setSeoActive,
    setAdsActive,
    setMorePages,
    setMoreLanguages,
  };
};

export default useBudgetForms;
