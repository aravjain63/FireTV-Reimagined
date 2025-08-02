# 🔥 FireTV-Reimagined

> **A Social-First, Context-Aware Recommender System for the Future of Streaming**

[🎬 Watch the UI Demo](https://www.youtube.com/watch?v=Kl8BmE-jQjo)

---

## 🚀 Overview

**FireTV-Reimagined** is a conceptual redesign of Amazon Fire TV’s recommendation engine and user experience, tackling the growing problem of *decision fatigue* in today’s OTT landscape. Our project blends **AI-powered personalization**, **context-awareness**, and **social watching features** to create a more emotionally intelligent, community-driven streaming experience.

---

## 🎯 Problem Space

Despite vast libraries and advanced UIs, most platforms fail to provide:
- **Truly personalized** content recommendations (based on context, not just history)
- **Social viewing** features that are truly native and integrated
- **Cross-platform, multi-profile intelligence** for families, couples, and remote friend groups

> 🧠 Users spend more time deciding what to watch than watching.  
> 🤝 65% want to watch with others — only 9% use current watch party features.

---

## 👥 Target Audiences

1. **Solo Viewers:** Mood-based, time-aware, and weather-aware suggestions.
2. **Families & Couples:** Smart “family blend” suggestions combining all preferences.
3. **Remote Friend Groups:** Easy-to-schedule watch parties with in-app chat and synced playback.

---

## 💡 Our Solution

### 🔮 Personalized Discovery
- Context-aware recommendations based on:
  - Time of day
  - Mood
  - Friend activity
  - Weather
- Smart shared watchlists that evolve with use.

### 📲 Unified & Intuitive Interface
- Cross-platform content aggregation
- Blended discovery based on metadata, friend activity, and preferences

### 👯‍♂️ Social Watch Parties (Native)
- Invite friends via code/link
- Real-time sync playback
- Built-in chat, reactions, and scheduling features

---

## 🧠 Recommendation Engine Architecture

### 🏗️ **Two-Tower Neural Network**
A scalable, vector-based recommender system.

- **User Tower** → Encodes preferences into user embeddings
- **Item Tower** → Encodes movie/show metadata into item embeddings
- Cosine similarity + ANN search (e.g., FAISS) for real-time recommendations
- Fresh embeddings combine:
  - User mood/context
  - Friend watch activity
  - Social weights (frequency, recency of interaction)

### 📈 Ranking Layer (Second Stage)
- Filters by:
  - Age restriction
  - Subscription availability
  - Already-watched status
  - Business objectives (e.g., boost new releases)
- Adds freshness and popularity factors

---

## 🛰️ Scalable Infrastructure

| Component                 | Technology                         |
|--------------------------|-------------------------------------|
| **Real-time Ingestion**  | AWS Kinesis                         |
| **Fast Reads / Writes**  | DynamoDB + DAX (Accelerator)        |
| **Batch Training**       | AWS SageMaker / EMR                 |
| **Live Serving**         | AWS Lambda + OpenSearch             |
| **Embedding Storage**    | Amazon S3 (static), DynamoDB (dynamic) |
| **Latency Optimization** | Lambda@Edge, predictive pre-fetching, HNSW |

---

